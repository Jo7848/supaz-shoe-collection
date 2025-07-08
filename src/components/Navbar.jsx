import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Supaz Shoes
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/dashboard/add" className="hover:text-gray-300">
              Add Product
            </Link>
          </li>
          <li>
            <Link to="/dashboard/manage" className="hover:text-gray-300">
              Manage
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
