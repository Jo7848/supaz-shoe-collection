import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products", {
        headers: {
          Authorization: "Bearer supaz_admin_token",
        },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`, {
        headers: {
          Authorization: "Bearer supaz_admin_token",
        },
      })
      .then(() => {
        setProducts(products.filter((product) => product._id !== id));
      })
      .catch((err) => console.error("Error deleting product:", err));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Manage Products</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-400">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-gray-800 rounded-lg p-4 shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-yellow-300 font-bold mt-2">Ksh {product.price}</p>

              <button
                className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
