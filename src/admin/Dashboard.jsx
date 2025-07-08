import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="space-x-4">
        <Link to="/admin/add" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Product</Link>
        <Link to="/admin/manage" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Manage Products</Link>
      </div>
    </div>
  );
};

export default Dashboard;
