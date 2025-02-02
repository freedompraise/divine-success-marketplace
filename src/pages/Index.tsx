import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-ds-background">
      <Hero />
      <Services />
      <Contact />
      <WhatsAppButton />
    </div>
  );
};

export default Index;