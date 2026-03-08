import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_NUMBER = "2348060026486";

const HeroSection = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to place an order.")}`;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-primary-foreground mb-4 leading-tight">
          Klassy Delight Enterprise
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-8 max-w-xl mx-auto">
          Delicious small chops & platters for every occasion. Fresh, crispy, and affordable — order now!
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground font-display font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg"
        >
          <MessageCircle size={22} />
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
