import { Search, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-bold text-ds-primary">
            Divine Success Agro
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-ds-secondary hover:text-ds-primary">Home</Link>
            <a href="#services" className="text-ds-secondary hover:text-ds-primary">Services</a>
            <a href="#products" className="text-ds-secondary hover:text-ds-primary">Products</a>
            <Link to="/blog" className="text-ds-secondary hover:text-ds-primary">Blog</Link>
            <a href="#contact" className="text-ds-secondary hover:text-ds-primary">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ds-accent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;