
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CarFront, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <CarFront className="h-6 w-6" />
          <span>RideShare</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/book-ride">
            <Button variant="outline">Book a Ride</Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
