import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-black text-white px-4 py-3 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-wide">
          Cerullo Shoes Collections
        </Link>

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <div className="hidden sm:flex space-x-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <Link to="/products" className="hover:text-yellow-500">Products</Link>
          <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
          <Link to="/dashboard" className="hover:text-yellow-500">Dashboard</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 space-y-4 px-4 flex flex-col text-sm">
          <Link to="/" onClick={closeMenu} className="hover:text-yellow-500">Home</Link>
          <Link to="/products" onClick={closeMenu} className="hover:text-yellow-500">Products</Link>
          <Link to="/contact" onClick={closeMenu} className="hover:text-yellow-500">Contact</Link>
          <Link to="/dashboard" onClick={closeMenu} className="hover:text-yellow-500">Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
