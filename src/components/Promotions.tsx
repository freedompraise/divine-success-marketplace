import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Promotions = () => {
  return (
    <section className="py-16 bg-ds-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ds-primary mb-8 text-center">
          Special Offers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Badge className="mb-4 bg-ds-accent">New Service</Badge>
            <h3 className="text-xl font-semibold mb-2">Pet Vaccination Package</h3>
            <p className="text-gray-600 mb-4">
              Complete vaccination package for your pets at a special discount.
            </p>
            <Button className="w-full bg-ds-accent hover:bg-ds-primary">
              Learn More
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Badge className="mb-4 bg-ds-secondary">Featured</Badge>
            <h3 className="text-xl font-semibold mb-2">Day-Old Chicks</h3>
            <p className="text-gray-600 mb-4">
              Quality day-old chicks available. Bulk orders get special pricing.
            </p>
            <Button className="w-full bg-ds-accent hover:bg-ds-primary">
              Learn More
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Badge className="mb-4 bg-ds-primary">Limited Time</Badge>
            <h3 className="text-xl font-semibold mb-2">Animal Drug Sale</h3>
            <p className="text-gray-600 mb-4">
              20% off on selected animal medications and supplements.
            </p>
            <Button className="w-full bg-ds-accent hover:bg-ds-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;