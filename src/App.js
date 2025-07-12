// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Login from "./pages/Login";

// Admin Pages
import Dashboard from "./admin/Dashboard";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Route Protection
import RequireAuth from "./utils/RequireAuth"; // from your file

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Admin Dashboard */}
            <Route path="/dashboard" element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            } />
            <Route path="/dashboard/add-product" element={
              <RequireAuth>
                <AddProduct />
              </RequireAuth>
            } />
            <Route path="/dashboard/manage-products" element={
              <RequireAuth>
                <ManageProducts />
              </RequireAuth>
            } />

            {/* Catch-all for unknown routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
