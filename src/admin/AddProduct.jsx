import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", product, {
        headers: {
          Authorization: "Bearer supaz_admin_token",
        },
      });
      alert("✅ Product added successfully!");
      setProduct({ name: "", price: "", image: "" });
    } catch (error) {
      console.error("❌ Error adding product:", error);
      alert("Failed to add product. Please check the image URL or server connection.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">Add New Product</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-gray-300">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring focus:ring-yellow-500"
            placeholder="E.g. Black Air Max"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block mb-1 text-gray-300">
            Price (Ksh)
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-yellow-500"
            placeholder="e.g. 4500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block mb-1 text-gray-300">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-yellow-500"
            placeholder="e.g. https://i.imgur.com/your-image.jpg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
