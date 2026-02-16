import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-20">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
          <span className="text-sm font-medium text-primary-foreground font-display">
            🔥 Now Taking Orders
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-primary-foreground mb-6 leading-tight">
          Your Favourite
          <span className="block text-primary"> Vendor Store</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-8 max-w-xl mx-auto">
          Browse our products below. See something you like? Tap the button and order directly on WhatsApp — no stress!
        </p>
        <a
          href="#products"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg"
        >
          View Products ↓
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
