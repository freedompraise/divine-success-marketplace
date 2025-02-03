import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const promotions = [
  {
    badge: "New Service",
    title: "Pet Vaccination Package",
    description: "Complete vaccination package for your pets at a special discount.",
    details: "Get a comprehensive vaccination package for your pets including core vaccines, health check-up, and consultation. Limited time offer with 20% off regular price. Package includes vaccinations against rabies, distemper, parvovirus, and more.",
    price: "₦15,000 (Regular price: ₦18,750)"
  },
  {
    badge: "Featured",
    title: "Day-Old Chicks",
    description: "Quality day-old chicks available. Bulk orders get special pricing.",
    details: "Premium quality day-old chicks from certified breeders. Bulk order discounts available: 10% off for orders over 100 chicks, 15% off for orders over 500 chicks. Package includes vaccination and feeding guide.",
    price: "Starting from ₦500 per chick"
  },
  {
    badge: "Limited Time",
    title: "Animal Drug Sale",
    description: "20% off on selected animal medications and supplements.",
    details: "Massive clearance sale on selected animal medications and supplements. Includes antibiotics, vitamins, dewormers, and more. Stock up now and save 20% on your purchase. Valid while stocks last.",
    price: "Various prices with 20% discount"
  }
];

const Promotions = () => {
  const handleWhatsAppInquiry = (offer: string) => {
    const message = `Hello, I'm interested in your special offer: ${offer}. Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348100481947?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-16 bg-ds-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ds-primary mb-8 text-center">
          Special Offers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Badge className="mb-4" variant={promo.badge === "New Service" ? "default" : "secondary"}>
                {promo.badge}
              </Badge>
              <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
              <p className="text-gray-600 mb-4">{promo.description}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-ds-accent hover:bg-ds-primary">
                    Learn More
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{promo.title}</DialogTitle>
                    <DialogDescription className="pt-4">
                      {promo.details}
                      <div className="mt-4 font-semibold">
                        Price: {promo.price}
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <Button
                      className="w-full bg-ds-accent hover:bg-ds-primary"
                      onClick={() => handleWhatsAppInquiry(promo.title)}
                    >
                      Secure This Offer
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;