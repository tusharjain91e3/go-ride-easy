
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { History, Settings, Star, CreditCard } from "lucide-react";

const Profile = () => {
  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    joined: "January 2023",
    trips: 24,
    avatar: "https://placehold.co/100"
  };

  // Mock ride history
  const rideHistory = [
    {
      id: "ride-123",
      date: "2025-04-05",
      pickup: "123 Main St",
      destination: "456 Oak Ave",
      price: 22.50,
      driver: "Michael B.",
      rating: 5
    },
    {
      id: "ride-122",
      date: "2025-04-01",
      pickup: "789 Pine Rd",
      destination: "123 Main St",
      price: 18.75,
      driver: "Sarah L.",
      rating: 4
    },
    {
      id: "ride-121",
      date: "2025-03-28",
      pickup: "456 Oak Ave",
      destination: "789 Pine Rd",
      price: 15.25,
      driver: "David K.",
      rating: 5
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="rounded-full w-24 h-24 object-cover"
                />
              </div>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Phone</span>
                  <span>{user.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Member since</span>
                  <span>{user.joined}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Total trips</span>
                  <span>{user.trips}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Edit Profile</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="w-full md:w-2/3">
          <Tabs defaultValue="rides">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="rides" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                <span>Ride History</span>
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Payment</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="rides" className="pt-4">
              <h2 className="text-xl font-bold mb-4">Recent Trips</h2>
              <div className="space-y-4">
                {rideHistory.map(ride => (
                  <Card key={ride.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">{new Date(ride.date).toLocaleDateString()}</p>
                          <p className="text-sm text-gray-500">{ride.pickup} → {ride.destination}</p>
                        </div>
                        <p className="font-semibold">${ride.price.toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2 text-sm">
                        <p>Driver: {ride.driver}</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{ride.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="payment" className="pt-4">
              <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-gray-500">No payment methods added yet.</p>
                  <Button className="w-full mt-4">Add Payment Method</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="pt-4">
              <h2 className="text-xl font-bold mb-4">Account Settings</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Notifications</h3>
                      <p className="text-sm text-gray-500">Configure your notification preferences.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Privacy</h3>
                      <p className="text-sm text-gray-500">Manage your privacy settings.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Language</h3>
                      <p className="text-sm text-gray-500">Change your preferred language.</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6">Save Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
