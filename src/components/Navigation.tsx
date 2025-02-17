
import { ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-primary">
            DAILY DROP
          </Link>
          
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Link 
              to="/products" 
              className={`text-gray-600 hover:text-primary transition-colors ${
                location.pathname === "/products" ? "text-primary font-medium" : ""
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/about"
              className={`text-gray-600 hover:text-primary transition-colors ${
                location.pathname === "/about" ? "text-primary font-medium" : ""
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className={`text-gray-600 hover:text-primary transition-colors ${
                location.pathname === "/contact" ? "text-primary font-medium" : ""
              }`}
            >
              Contact
            </Link>
            <button className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-primary transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
