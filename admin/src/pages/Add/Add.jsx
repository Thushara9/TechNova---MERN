import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import './Add.css';
import axios  from "axios"
import { toast } from 'react-toastify';

const Add = () => {

  const url = "http://localhost:4000";
  const [image, setimage] = useState(null);
  const [thumbnail1, setThumbnail1] = useState(null);
  const [thumbnail2, setThumbnail2] = useState(null);
  const [thumbnail3, setThumbnail3] = useState(null);

  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('price', Number(data.price));

  formData.append('image', image);
    if (thumbnail1) formData.append('thumbnail1', thumbnail1);
    if (thumbnail2) formData.append('thumbnail2', thumbnail2);
    if (thumbnail3) formData.append('thumbnail3', thumbnail3);

    const response = await axios.post(`${url}/api/product/add`,formData)
    if (response.data.success){
setData({
  name: "",
  description: "",
  category: "",
  price: "",
})

setimage(false)
setThumbnail1(false)
setThumbnail2(false)
setThumbnail3(false)
toast.success(response.data.message)

    }
    else{
        toast.error(response.data.message)
    }
  };

  return (
    <div className="product-add-container">
      <form onSubmit={onSubmitHandler}>
        <div className="product-images-section">
          <div className="image-upload-area main-image">
            {image ? <img src={URL.createObjectURL(image)} alt="Main" /> : <FaCloudUploadAlt className="upload-icon" />}
            <p>Upload Main Image</p>
            <input onChange={(e) => setimage(e.target.files[0])} type="file" accept="image/*" />
          </div>
          <div className="thumbnail-images">
            <div className="image-upload-area">
              {thumbnail1 ? <img src={URL.createObjectURL(thumbnail1)} alt="Thumbnail 1" /> : <FaCloudUploadAlt className="upload-icon" />}
              <p>Upload Thumbnail 1</p>
              <input onChange={(e) => setThumbnail1(e.target.files[0])} type="file" accept="image/*" />
            </div>
            <div className="image-upload-area">
              {thumbnail2 ? <img src={URL.createObjectURL(thumbnail2)} alt="Thumbnail 2" /> : <FaCloudUploadAlt className="upload-icon" />}
              <p>Upload Thumbnail 2</p>
              <input onChange={(e) => setThumbnail2(e.target.files[0])} type="file" accept="image/*" />
            </div>
            <div className="image-upload-area">
              {thumbnail3 ? <img src={URL.createObjectURL(thumbnail3)} alt="Thumbnail 3" /> : <FaCloudUploadAlt className="upload-icon" />}
              <p>Upload Thumbnail 3</p>
              <input onChange={(e) => setThumbnail3(e.target.files[0])} type="file" accept="image/*" />
            </div>
          </div>
        </div>
        <div className="product-details-section">
          <div className="form-group">
            <label>Product Name</label>
            <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Enter product name" />
          </div>
          <div className="form-group">
            <label>Product Description</label>
            <textarea name="description" onChange={onChangeHandler} value={data.description} placeholder="Enter product description"></textarea>
          </div>
          <div className="form-group">
            <label>Product Category</label>
            <select name="category" onChange={onChangeHandler} value={data.category}>
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
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input name="price" onChange={onChangeHandler} value={data.price} type="number" placeholder="Enter product price" />
          </div>
          <button className="submit-button" type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
