
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CarFront, MapPin, Star } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get to Your Destination Safely & Quickly</h1>
          <p className="text-xl mb-8">Book a ride in minutes and enjoy comfortable travel anywhere in the city.</p>
          <Link to="/book-ride">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              Book a Ride Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose RideShare?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CarFront className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliable Rides</h3>
              <p className="text-gray-600">Our drivers arrive on time, every time, with comfortable and well-maintained vehicles.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Booking</h3>
              <p className="text-gray-600">Book your ride in just a few clicks with our user-friendly interface.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Top-Rated Drivers</h3>
              <p className="text-gray-600">Our drivers are highly rated and undergo rigorous training for your safety.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
