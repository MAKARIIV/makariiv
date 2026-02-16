import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
  whatsappNumber: string;
}

const ProductCard = ({ name, price, image, description, whatsappNumber }: ProductCardProps) => {
  const message = encodeURIComponent(`Hi! I'd like to order: ${name} (${price})`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-lg text-card-foreground">{name}</h3>
          <span className="font-display font-bold text-primary text-lg whitespace-nowrap">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 font-body">{description}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-whatsapp text-whatsapp-foreground font-display font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={20} />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
