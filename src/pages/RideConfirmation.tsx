
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle, MapPin, Clock, CreditCard } from "lucide-react";

const RideConfirmation = () => {
  const navigate = useNavigate();
  const [rideDetails, setRideDetails] = useState<any>(null);
  const [selectedRide, setSelectedRide] = useState<any>(null);
  
  useEffect(() => {
    // Get ride details from localStorage
    const details = localStorage.getItem("rideDetails");
    const ride = localStorage.getItem("selectedRide");
    
    if (!details || !ride) {
      toast.error("Please complete your booking first");
      navigate("/book-ride");
      return;
    }
    
    setRideDetails(JSON.parse(details));
    setSelectedRide(JSON.parse(ride));
  }, [navigate]);
  
  const handleConfirmRide = () => {
    // In a real app, you would make an API call to confirm the booking
    toast.success("Your ride has been confirmed!");
    
    // Clear localStorage
    localStorage.removeItem("rideDetails");
    localStorage.removeItem("selectedRide");
    
    // Show success message and redirect to home
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  
  if (!rideDetails || !selectedRide) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="text-center mb-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Confirm Your Ride</h1>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ride Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Pickup Location</p>
              <p className="font-medium">{rideDetails.pickup}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Destination</p>
              <p className="font-medium">{rideDetails.destination}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Estimated Arrival</p>
              <p className="font-medium">{selectedRide.time}</p>
            </div>
          </div>
          
          <div className="border-t my-4"></div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Ride Type</span>
            <span className="font-medium">{selectedRide.name} ({selectedRide.type})</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Ride Fare</span>
            <span className="font-medium">${selectedRide.price}</span>
          </div>
          
          <div className="flex justify-between border-t pt-4">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold">${selectedRide.price}</span>
          </div>
        </CardContent>
        <CardFooter className="flex-col space-y-4">
          <div className="flex items-center gap-2 w-full p-3 border rounded-md bg-gray-50">
            <CreditCard className="h-5 w-5 text-gray-500" />
            <span>Payment on completion</span>
          </div>
          
          <Button onClick={handleConfirmRide} className="w-full">
            Confirm Booking
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RideConfirmation;
