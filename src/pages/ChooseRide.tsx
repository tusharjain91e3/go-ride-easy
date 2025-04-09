
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Clock, Users, Car } from "lucide-react";

interface RideOption {
  id: string;
  name: string;
  type: string;
  price: number;
  time: string;
  capacity: number;
  image: string;
}

const rideOptions: RideOption[] = [
  {
    id: "economy",
    name: "Economy",
    type: "Sedan",
    price: 15.99,
    time: "15-20 min",
    capacity: 4,
    image: "https://placehold.co/200x120"
  },
  {
    id: "comfort",
    name: "Comfort",
    type: "SUV",
    price: 22.99,
    time: "12-15 min",
    capacity: 4,
    image: "https://placehold.co/200x120"
  },
  {
    id: "premium",
    name: "Premium",
    type: "Luxury Sedan",
    price: 35.99,
    time: "8-12 min",
    capacity: 3,
    image: "https://placehold.co/200x120"
  }
];

const ChooseRide = () => {
  const navigate = useNavigate();
  const [rideDetails, setRideDetails] = useState<any>(null);
  
  // Get ride details from localStorage
  useEffect(() => {
    const details = localStorage.getItem("rideDetails");
    if (!details) {
      toast.error("Please enter your ride details first");
      navigate("/book-ride");
      return;
    }
    setRideDetails(JSON.parse(details));
  }, [navigate]);
  
  const handleSelectRide = (ride: RideOption) => {
    // Store the selected ride in localStorage
    localStorage.setItem("selectedRide", JSON.stringify(ride));
    navigate("/confirm-ride");
  };
  
  if (!rideDetails) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }
  
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-2">Choose Your Ride</h1>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p className="font-medium">From: {rideDetails.pickup}</p>
        <p className="font-medium">To: {rideDetails.destination}</p>
      </div>
      
      <div className="space-y-4 mt-8">
        {rideOptions.map((ride) => (
          <Card key={ride.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 bg-gray-200">
                <img 
                  src={ride.image} 
                  alt={ride.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/4">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{ride.name}</CardTitle>
                    <Badge variant="outline">{ride.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{ride.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>Up to {ride.capacity} people</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-gray-500" />
                      <span>{ride.type}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div className="text-2xl font-bold">${ride.price}</div>
                  <Button onClick={() => handleSelectRide(ride)}>Select</Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChooseRide;
