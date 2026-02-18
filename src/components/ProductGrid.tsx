import { useState, useRef, useEffect } from "react";
import { MessageCircle, Plus, Minus, Pencil, Check } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const WHATSAPP_NUMBER = "2348060026486";

const products = [
  { name: "Jollof Rice Combo", price: "₦3,500", image: product1, description: "Smoky jollof rice with fried plantain and peppered chicken." },
  { name: "Birthday Cake", price: "₦25,000", image: product2, description: "Custom layered cake with cream frosting and fresh berries." },
  { name: "Designer Perfume", price: "₦15,000", image: product3, description: "Long-lasting luxury fragrance. Unisex, 100ml bottle." },
  { name: "Knotless Braids", price: "₦20,000", image: product4, description: "Neat knotless braids, waist-length. Lasts 6-8 weeks." },
  { name: "Thrift Outfit Bundle", price: "₦8,000", image: product5, description: "Curated vintage outfit with accessories. Fresh & unique." },
  { name: "Small Chops Pack", price: "₦5,000", image: product6, description: "Meat pie, spring rolls & puff-puff. Perfect for events." },
];

const DEFAULT_TITLE = "🍽️ Today's Available Meals";

const ProductGrid = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(products.map((p) => [p.name, 0]))
  );
  const [title, setTitle] = useState(() => localStorage.getItem("menu-title") || DEFAULT_TITLE);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [availability, setAvailability] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem("menu-availability");
    if (saved) return JSON.parse(saved);
    return Object.fromEntries(products.map((p) => [p.name, true]));
  });

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const saveTitle = () => {
    const trimmed = title.trim() || DEFAULT_TITLE;
    setTitle(trimmed);
    localStorage.setItem("menu-title", trimmed);
    setIsEditing(false);
  };

  const toggleAvailability = (name: string) => {
    setAvailability((prev) => {
      const next = { ...prev, [name]: !prev[name] };
      localStorage.setItem("menu-availability", JSON.stringify(next));
      return next;
    });
  };

  const updateQty = (name: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(0, (prev[name] || 0) + delta),
    }));
  };

  const selectedItems = products.filter(
    (p) => quantities[p.name] > 0 && availability[p.name] !== false
  );

  const orderMessage = encodeURIComponent(
    `Hi! I'd like to order:\n${selectedItems
      .map((p) => `• ${p.name} (${p.price}) x ${quantities[p.name]}`)
      .join("\n")}`
  );

  return (
    <section id="menu" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveTitle()}
                  onBlur={saveTitle}
                  className="text-3xl md:text-4xl font-bold font-display text-foreground bg-transparent border-b-2 border-primary outline-none text-center max-w-md"
                />
                <button onClick={saveTitle} className="text-primary hover:opacity-80 transition-opacity" aria-label="Save title">
                  <Check size={24} />
                </button>
              </div>
            ) : (
              <h2
                className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3 cursor-pointer group inline-flex items-center gap-2"
                onClick={() => setIsEditing(true)}
                title="Click to edit"
              >
                {title}
                <Pencil size={18} className="opacity-0 group-hover:opacity-50 transition-opacity" />
              </h2>
            )}
          </div>
          <p className="text-muted-foreground font-body text-lg">
            Everything fresh, everything delicious
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {products.map((p) => (
              <button
                key={p.name}
                onClick={() => toggleAvailability(p.name)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-body border transition-colors ${
                  availability[p.name]
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "bg-muted border-border text-muted-foreground line-through"
                }`}
              >
                {availability[p.name] ? "✅" : "❌"} {p.name}
                {!availability[p.name] && <span className="text-xs no-underline">(Finished)</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {products.map((product) => {
            const qty = quantities[product.name] || 0;
            const isAvailable = availability[product.name] !== false;
            return (
              <div
                key={product.name}
                className={`flex items-center gap-4 bg-card rounded-2xl border border-border p-3 transition-shadow ${isAvailable ? "hover:shadow-md" : "opacity-50"}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-semibold text-card-foreground text-base md:text-lg">
                      {product.name}
                    </h3>
                    <span className="font-display font-bold text-primary text-base md:text-lg whitespace-nowrap">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm font-body mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  {isAvailable && (
                  <div className="flex items-center gap-3 mt-2">
                    <div className="inline-flex items-center border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQty(product.name, -1)}
                        className="p-1.5 hover:bg-muted transition-colors text-muted-foreground"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-sm font-display font-semibold text-card-foreground min-w-[2rem] text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => updateQty(product.name, 1)}
                        className="p-1.5 hover:bg-muted transition-colors text-muted-foreground"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    {qty > 0 && (
                      <span className="text-xs font-body text-primary font-semibold">Added ✓</span>
                    )}
                  </div>
                  )}
                  {!isAvailable && (
                    <p className="text-sm font-body text-destructive mt-1">❌ Finished</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {selectedItems.length > 0 && (
          <div className="sticky bottom-4 mt-6 bg-card border border-border rounded-2xl p-4 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-sm font-body text-muted-foreground">
                <span className="font-semibold text-foreground">{selectedItems.length} item{selectedItems.length > 1 ? "s" : ""}</span> selected:{" "}
                {selectedItems.map((p) => `${p.name} x${quantities[p.name]}`).join(", ")}
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${orderMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground font-display font-semibold px-6 py-3 rounded-full text-base hover:scale-105 transition-transform shadow-md whitespace-nowrap"
              >
                <MessageCircle size={20} />
                Send Order on WhatsApp
              </a>
            </div>
          </div>
        )}

        {selectedItems.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-muted-foreground font-body mb-4">Select items above, then send your order</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to place an order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground font-display font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg"
          >
            <MessageCircle size={22} />
            Chat on WhatsApp
          </a>
        </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
