import { Check } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    title: "Pet Health Care",
    description: "Comprehensive healthcare services for your pets",
    price: "Starts from ₦5,000",
  },
  {
    title: "Ruminate Health Care",
    description: "Specialized care for cattle, sheep, and goats",
    price: "Starts from ₦10,000",
  },
  {
    title: "Poultry Health Care",
    description: "Expert healthcare for all types of poultry",
    price: "Starts from ₦3,000",
  },
  {
    title: "Animal Drugs",
    description: "Quality medications and supplements",
    price: "Varies by product",
  },
  {
    title: "Day-old Birds",
    description: "Supply of healthy day-old chicks",
    price: "Contact for pricing",
  },
  {
    title: "Agro-chemical Services",
    description: "Professional fumigation and pest control",
    price: "Custom quote",
  },
];

const ServiceGrid = () => {
  return (
    <section className="py-16 bg-white" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ds-primary mb-8 text-center">
          Our Services & Products
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-ds-accent transition-colors"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-ds-accent rounded-full p-2">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ds-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  <p className="text-ds-secondary font-semibold mt-2">
                    {service.price}
                  </p>
                </div>
              </div>
              <Button className="w-full bg-ds-accent hover:bg-ds-primary mt-4">
                Enquire Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;