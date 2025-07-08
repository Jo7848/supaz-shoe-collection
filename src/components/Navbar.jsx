import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide text-white">
          Supaz
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/products" className="hover:text-gray-300 transition">Shoes</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
          <Link to="/dashboard" className="hover:text-gray-300 transition">Dashboard</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 px-4 space-y-4 bg-black pb-4">
          <Link to="/" onClick={toggleMenu} className="hover:text-gray-300">Home</Link>
          <Link to="/products" onClick={toggleMenu} className="hover:text-gray-300">Shoes</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-gray-300">Contact</Link>
          <Link to="/dashboard" onClick={toggleMenu} className="hover:text-gray-300">Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
