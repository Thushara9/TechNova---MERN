import React, { useState } from 'react';
import axios from 'axios';
import './EditProductModal.css'
import { toast } from 'react-toastify';

const EditProductModal = ({ product, onClose, onSave }) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    const [description, setDescription] = useState(product.description);
    const [image, setImage] = useState(null);

    const url = "http://localhost:4000";

    const handleUpdate = async () => {
        const formData = new FormData();
        formData.append("id", product._id);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("description", description);
        if (image) formData.append("image", image);

        try {
            const response = await axios.put(`${url}/api/product/update`, formData);
            if (response.data.success) {
                toast.success("Product updated successfully");
                onSave();
                onClose();
            } else {
                toast.error("Error updating product");
            }
        } catch (error) {
            toast.error("Error updating product");
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Edit Product</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />

                <select name="category" onChange={(e) => setCategory(e.target.value)}  value={category}>
              <option value="">Select category</option>
              <option value="Speakers">Speakers</option>
              <option value="HeadPhones">HeadPhones</option>
              <option value="Smart Watch">Smart Watch</option>
              <option value="Power Banks">Power Banks</option>
              <option value="Projectors">Projectors</option>
              <option value="Security Camera">Security Camera</option>
              <option value="Cables">Cables</option>
              <option value="Smart Tools">Smart Tools</option>
            </select>



                {/* <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" /> */}
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button onClick={handleUpdate}>Update Product</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default EditProductModal;
