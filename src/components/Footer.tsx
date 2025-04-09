
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600">© 2025 RideShare. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
