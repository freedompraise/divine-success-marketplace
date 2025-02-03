import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Promotions from "@/components/Promotions";
import ServiceGrid from "@/components/ServiceGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-ds-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Promotions />
      <ServiceGrid />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;