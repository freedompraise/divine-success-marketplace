import { Check, Send } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    title: "Pet Health Care",
    description: "Comprehensive healthcare services for your pets",
    price: "Starts from ₦5,000",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
  },
  {
    title: "Ruminate Health Care",
    description: "Specialized care for cattle, sheep, and goats",
    price: "Starts from ₦10,000",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
  },
  {
    title: "Poultry Health Care",
    description: "Expert healthcare for all types of poultry",
    price: "Starts from ₦3,000",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
  },
  {
    title: "Animal Drugs",
    description: "Quality medications and supplements",
    price: "Varies by product",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
  },
  {
    title: "Day-old Birds",
    description: "Supply of healthy day-old chicks",
    price: "Contact for pricing",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369"
  },
  {
    title: "Agro-chemical Services",
    description: "Professional fumigation and pest control",
    price: "Custom quote",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838"
  },
];

const ServiceGrid = () => {
  const handleWhatsAppInquiry = (service: string) => {
    const message = `Hello, I'm interested in your ${service} service. Can you provide more information?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348100481947?text=${encodedMessage}`, "_blank");
  };

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
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-ds-accent transition-colors"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
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
                <Button 
                  className="w-full bg-ds-accent hover:bg-ds-primary mt-4 flex items-center justify-center gap-2"
                  onClick={() => handleWhatsAppInquiry(service.title)}
                >
                  <Send className="w-4 h-4" />
                  Inquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;