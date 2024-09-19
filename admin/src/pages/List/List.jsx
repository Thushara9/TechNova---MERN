import React, { useEffect, useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import EditProductModal from '../../Components/EditProductModal/EditProductModal';

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching product list");
      }
    } catch (error) {
      console.error("Error fetching product list:", error);
      toast.error("Error fetching product list");
    }
  };

  const removeProduct = async (productId) => {
    const response = await axios.post(`${url}/api/product/remove`, { id: productId })
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error("ERROR");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const editProduct = (product) => {
    setEditingProduct(product);
  };

  const handleSave = () => {
    fetchList();
  };

  const closeEditModal = () => {
    setEditingProduct(null);
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">
                <img
                  src={`${url}/images/` + item.image}
                  alt=""
                  className="product-image"
                />
              </td>
              <td className="p-2">
                <div>{item.name}</div>
              </td>
              <td className="p-2">Rs.{item.price.toFixed(2)}</td>
              <td className="p-2">{item.category}</td>
              <td className="p-2">
                <div className="action-buttons">
                  <FiEdit
                    onClick={() => editProduct(item)}
                    className="edit-button"
                    size={20}
                  />
                  <FiTrash
                    onClick={() => removeProduct(item._id)}
                    className="delete-button"
                    size={20}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Product Modal */}
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={closeEditModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default List;
