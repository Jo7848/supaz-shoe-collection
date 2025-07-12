import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">Admin Dashboard</h2>

        <div className="space-y-4">
          <Link
            to="/dashboard/add-product"
            className="block w-full bg-yellow-500 text-black font-semibold py-3 px-4 rounded hover:bg-yellow-600 transition"
          >
            ➕ Add Product
          </Link>

          <Link
            to="/dashboard/manage-products"
            className="block w-full bg-yellow-500 text-black font-semibold py-3 px-4 rounded hover:bg-yellow-600 transition"
          >
            🛠️ Manage Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
