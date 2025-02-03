import { Check } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-ds-primary mb-6">
              Your Trusted Partner in Animal Healthcare
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Divine Success Agro Veterinary, we understand that your animals are more than just livestock or pets – they're valuable members of your family or business. With years of dedicated service in Benin City, we provide comprehensive veterinary care and agricultural solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="text-ds-accent w-6 h-6" />
                <span className="text-gray-700">24/7 Emergency Veterinary Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-ds-accent w-6 h-6" />
                <span className="text-gray-700">Expert Care for All Animal Types</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-ds-accent w-6 h-6" />
                <span className="text-gray-700">Quality Medications & Supplies</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-ds-accent w-6 h-6" />
                <span className="text-gray-700">Professional Agricultural Services</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
              alt="Veterinary Care"
              className="rounded-lg shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
              alt="Animal Care"
              className="absolute -bottom-10 -left-10 w-2/3 rounded-lg shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;