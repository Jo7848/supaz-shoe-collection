import React, { useState } from 'react';

const ProductForm = ({ initialData = {}, onSubmit }) => {
  const [name, setName] = useState(initialData.name || '');
  const [price, setPrice] = useState(initialData.price || '');
  const [image, setImage] = useState(initialData.image || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price, image });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full mx-auto mt-10 text-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">Product Details</h2>

      <label className="block mb-4">
        <span className="text-gray-300">Product Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring focus:ring-yellow-500"
          placeholder="Enter product name"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-300">Price (KES)</span>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring focus:ring-yellow-500"
          placeholder="Enter price"
          required
        />
      </label>

      <label className="block mb-6">
        <span className="text-gray-300">Image Path</span>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="mt-1 block w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring focus:ring-yellow-500"
          placeholder="/shoes/titan-flux.jpg"
          required
        />
      </label>

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
