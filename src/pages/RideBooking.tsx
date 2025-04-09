
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { MapPin } from "lucide-react";

const RideBooking = () => {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!pickup || !destination) {
      toast.error("Please enter both pickup and destination locations");
      return;
    }
    
    // In a real app, you'd validate the locations here
    toast.success("Locations confirmed!");
    
    // Store the booking details in localStorage or state management
    localStorage.setItem("rideDetails", JSON.stringify({
      pickup,
      destination,
      date: new Date().toISOString()
    }));
    
    // Navigate to the ride selection page
    navigate("/choose-ride");
  };
  
  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Book Your Ride</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">Pickup Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              id="pickup"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup address"
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination address"
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <Button type="submit" className="w-full">
          Find Available Rides
        </Button>
      </form>
    </div>
  );
};

export default RideBooking;
