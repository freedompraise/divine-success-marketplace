import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ds-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-200">
              Divine Success Agro Veterinary provides comprehensive animal healthcare
              and agricultural solutions to ensure the well-being of your livestock
              and pets.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-ds-accent">Services</a></li>
              <li><a href="#products" className="hover:text-ds-accent">Products</a></li>
              <li><a href="#contact" className="hover:text-ds-accent">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                73 Benin Auchi Road, Aduwawa
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +234 810 048 1947
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                jollyohen@gmail.com
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-ds-accent">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-ds-accent">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} Divine Success Agro Veterinary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;