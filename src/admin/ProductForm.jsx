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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>

      <label className="block mb-2">
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </label>

      <label className="block mb-2">
        Price (KES)
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </label>

      <label className="block mb-4">
        Image Path (e.g. `/shoes/titan-flux.jpg`)
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </label>

      <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
