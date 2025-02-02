import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:jollyohen@gmail.com";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348100481947", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-ds-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-ds-primary text-center mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Phone className="w-6 h-6 text-ds-accent" />
              <h3 className="text-xl font-semibold">Phone/WhatsApp</h3>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="text-lg text-ds-primary hover:text-ds-accent transition-colors"
            >
              +234 810 048 1947
            </button>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Mail className="w-6 h-6 text-ds-accent" />
              <h3 className="text-xl font-semibold">Email</h3>
            </div>
            <button
              onClick={handleEmailClick}
              className="text-lg text-ds-primary hover:text-ds-accent transition-colors"
            >
              jollyohen@gmail.com
            </button>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <MapPin className="w-6 h-6 text-ds-accent" />
              <h3 className="text-xl font-semibold">Address</h3>
            </div>
            <p className="text-lg text-ds-primary">
              73 Benin Auchi Road, Opposite Big Joe Filling Station
              <br />
              Aduwawa, Benin City, Edo State
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;