import React from 'react';

const AddProduct = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form className="space-y-4 max-w-lg">
        <input type="text" placeholder="Product Name" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Image URL or Upload Feature" className="w-full p-2 border rounded" />
        <input type="number" placeholder="Price" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
