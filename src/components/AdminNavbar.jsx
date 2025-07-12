import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-black text-white px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center shadow">
      <Link to="/dashboard" className="text-2xl font-bold mb-2 md:mb-0 text-yellow-400">
        Admin Panel
      </Link>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6">
        <Link
          to="/add-product"
          className="hover:text-yellow-400 transition text-sm md:text-base"
        >
          ➕ Add Product
        </Link>
        <Link
          to="/manage-products"
          className="hover:text-yellow-400 transition text-sm md:text-base"
        >
          🛠️ Manage Products
        </Link>
        <Link
          to="/"
          className="hover:text-yellow-400 transition text-sm md:text-base"
        >
          👟 View Site
        </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
