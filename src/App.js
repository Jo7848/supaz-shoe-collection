import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Dashboard from './admin/Dashboard';
import AddProduct from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Pages */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add" element={<AddProduct />} />
        <Route path="/admin/manage" element={<ManageProducts />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
