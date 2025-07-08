import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link to="/admin/dashboard" className="text-2xl font-bold">
        Admin Panel
      </Link>
      <div className="space-x-4">
        <Link to="/admin/add" className="hover:underline">Add Product</Link>
        <Link to="/admin/manage" className="hover:underline">Manage Products</Link>
        <Link to="/" className="hover:underline">View Site</Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
