import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black text-white py-4 px-6 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          Supaz <span className="text-yellow-400">Shoes</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center bg-black text-lg py-4 rounded-lg">
          <Link to="/" onClick={closeMenu} className="block hover:text-yellow-400 transition">Home</Link>
          <Link to="/products" onClick={closeMenu} className="block hover:text-yellow-400 transition">Products</Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-yellow-400 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
