import { Check } from "lucide-react";

const services = [
  "Pet Health Care",
  "Ruminate Health Care",
  "Non-ruminate Health Care",
  "Poultry Health Care",
  "Rabbitry Health Care",
  "Snailry Health Care",
  "Fish Health Care",
  "Sales of Animal Drugs",
  "Supply of Day-old Birds",
  "Agro-chemical and Fumigation",
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-ds-primary text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:border-ds-accent transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-ds-accent rounded-full p-2">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-ds-primary">{service}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;