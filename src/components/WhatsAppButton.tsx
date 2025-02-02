import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348100481947", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors animate-float"
      aria-label="Contact on WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;