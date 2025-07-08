import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/admin/add-product" className="hover:underline">Add Product</Link>
          <Link to="/admin/manage-products" className="hover:underline">Manage Products</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="text-3xl font-semibold">Welcome to the Admin Dashboard</h1>
        {/* You can add some dashboard summary content here if you want */}
      </div>
    </div>
  );
};

export default Dashboard;
