import {
  ShoppingBag,
  Search,
  Bell,
  Settings,
  Menu,
  ChevronDown,
} from "lucide-react";

const Navbar = ({ onMenuClick, onNotificationClick }) => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="ml-4 flex items-center">
            <ShoppingBag className="h-6 w-6 text-blue-500" />
            <span className="ml-2 text-xl font-semibold">ShopDash</span>
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
          <button
            onClick={onNotificationClick}
            className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
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
);
export default Navbar;
