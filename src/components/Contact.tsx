import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleEmailClick = () => {
    window.location.href = "mailto:jollyohen@gmail.com";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348100481947", "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/2348100481947?text=${message}`, "_blank");
    toast({
      title: "Inquiry Sent",
      description: "We'll get back to you shortly via WhatsApp.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-ds-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-ds-primary text-center mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
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
              <p className="text-lg text-ds-primary mb-4">
                73 Benin Auchi Road, Opposite Big Joe Filling Station
                <br />
                Aduwawa, Benin City, Edo State
              </p>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7289161435847!2d5.6551!3d6.3382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3018698b2c9%3A0x7a76cef37c0a928f!2sAduwawa%2C%20Benin%20City!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-ds-primary mb-6">Send us an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Your message"
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full bg-ds-accent hover:bg-ds-primary">
                <Send className="w-4 h-4 mr-2" />
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;