import { MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappUrl = "https://wa.me/2348012345678?text=" + encodeURIComponent("Hi! I want to place an order.");

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-display text-2xl font-bold mb-3">Ready to Order?</h3>
        <p className="text-background/70 font-body mb-6 max-w-md mx-auto">
          Send us a message on WhatsApp and we'll sort you out in minutes!
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground font-display font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform"
        >
          <MessageCircle size={22} />
          Chat with Us
        </a>
        <p className="mt-10 text-background/40 text-sm font-body">
          © {new Date().getFullYear()} Your Vendor Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
