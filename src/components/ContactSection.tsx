import { MessageCircle, Phone, Instagram } from "lucide-react";

const WHATSAPP_NUMBER = "2348060026486";

const ContactSection = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I want to place an order.")}`;

  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3">
          📞 Contact Us
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-8">
          Reach out anytime — we respond fast!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="tel:+2348060026486"
            className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 font-body text-card-foreground hover:shadow-md transition-shadow"
          >
            <Phone size={18} className="text-primary" />
            +234 801 234 5678
          </a>
          <a
            href="https://instagram.com/yourvendorstore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 font-body text-card-foreground hover:shadow-md transition-shadow"
          >
            <Instagram size={18} className="text-primary" />
            @yourvendorstore
          </a>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground font-display font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg"
        >
          <MessageCircle size={22} />
          Chat with Us on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
