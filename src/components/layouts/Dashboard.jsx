import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Menu,
  Bell,
  Search,
  Settings,
  ChevronDown,
  DollarSign,
  ShoppingBag,
  UserPlus,
} from "lucide-react";
import ProductsPageDashboard from "../common/ProductPageDahboard";
import CustomersPageDashboard from "../common/CustomerPageDashboard";
import StatsCard from "../common/StatsCard";
import OrdersPageDashboard from "../common/OrdersPageDashboard";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard"); // State for active tab
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const [productsResponse, customersResponse] = await Promise.all([
        fetch("http://127.0.0.1:8080/products"),
        fetch("http://127.0.0.1:8080/customers"),
      ]);

      if (!productsResponse.ok || !customersResponse.ok) {
        throw new Error("Failed to fetch data.");
      }

      const productsData = await productsResponse.json();
      const customersData = await customersResponse.json();

      setTotalProducts(productsData.products?.length || 0);
      setTotalCustomers(customersData.customers?.length || 0);
    } catch (error) {
      console.error("Error fetching stats:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "products":
        return <ProductsPageDashboard />;
      case "customers":
        return <CustomersPageDashboard />;
      case "orders":
        return <OrdersPageDashboard />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Revenue"
              value="$54,375"
              icon={DollarSign}
              trend={12.5}
            />
            <StatsCard
              title="Total Orders"
              value="845"
              icon={ShoppingCart}
              trend={8.2}
            />
            <StatsCard
              title="Total Products"
              value={loading ? "Loading..." : totalProducts}
              icon={Package}
              trend={-2.4}
            />
            <StatsCard
              title="Total Customers"
              value={loading ? "Loading..." : totalCustomers}
              icon={Users}
              trend={4.6}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="ml-4 flex items-center">
                <ShoppingBag className="h-6 w-6 text-blue-500" />
                <span className="text-blue-500 text-xl font-semibold ml-auto md:ml-28 md:pl-8">
                  Bloom Beauty
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 bg-transparent border-none focus:outline-none"
                />
              </div>
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <Settings className="h-6 w-6" />
              </button>
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="/api/placeholder/32/32"
                  alt="User avatar"
                />
                <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out z-30`}
      >
        <div className="flex flex-col h-full w-64 bg-white border-r">
          <div className="flex-1 overflow-y-auto pt-20">
            <nav className="px-2 space-y-1">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex items-center px-4 py-3 ${
                  activeTab === "dashboard"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600"
                } hover:bg-gray-50 rounded-lg`}
              >
                <TrendingUp className="h-5 w-5" />
                <span className="ml-3">Dashboard</span>
              </button>
              <button
                onClick={() => setActiveTab("products")}
                className={`flex items-center px-4 py-3 ${
                  activeTab === "products"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600"
                } hover:bg-gray-50 rounded-lg`}
              >
                <Package className="h-5 w-5" />
                <span className="ml-3">Products</span>
              </button>
              <button
                onClick={() => setActiveTab("customers")}
                className={`flex items-center px-4 py-3 ${
                  activeTab === "customers"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600"
                } hover:bg-gray-50 rounded-lg`}
              >
                <Users className="h-5 w-5" />
                <span className="ml-3">Customers</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`md:pl-64 flex flex-col flex-1 transition-all duration-200 ${
          sidebarOpen ? "pl-64" : "pl-0"
        }`}
      >
        <main className="flex-1 p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
