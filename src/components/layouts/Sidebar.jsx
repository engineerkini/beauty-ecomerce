
import React from 'react';
import { TrendingUp, Package, ShoppingCart, Users } from 'lucide-react';

const Sidebar = ({ isOpen, onNavigate }) => (
  <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out z-30`}>
    <div className="flex flex-col h-full w-64 bg-white border-r">
      <div className="flex-1 overflow-y-auto pt-20">
        <nav className="px-2 space-y-1">
          {[
            { name: 'Dashboard', icon: TrendingUp, path: 'dashboard' },
            { name: 'Products', icon: Package, path: 'products' },
            { name: 'Orders', icon: ShoppingCart, path: 'orders' },
            { name: 'Customers', icon: Users, path: 'customers' }
          ].map(({ name, icon: Icon, path }) => (
            <a
              key={path}
              onClick={() => onNavigate(path)}
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <Icon className="h-5 w-5" />
              <span className="ml-3">{name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  </div>
);

export default Sidebar;
