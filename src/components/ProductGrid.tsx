import { useState } from "react";
import { MessageCircle, Plus, Minus, Check, Settings } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { menuCategories, getAllItems, formatPrice, WHATSAPP_NUMBER, type MenuItem } from "@/data/menuData";

const ProductGrid = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const defaultUnavailable: Record<string, boolean> = { "Snails": true };
  const [unavailable, setUnavailable] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem("klassy-unavailable");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.date !== new Date().toDateString()) {
          localStorage.setItem(
            "klassy-unavailable",
            JSON.stringify({ date: new Date().toDateString(), items: defaultUnavailable })
          );
          return defaultUnavailable;
        }
        return parsed.items || {};
      }
    } catch {}
    localStorage.setItem(
      "klassy-unavailable",
      JSON.stringify({ date: new Date().toDateString(), items: defaultUnavailable })
    );
    return defaultUnavailable;
  });
  const [editMode, setEditMode] = useState(false);

  const toggleAvailability = (name: string) => {
    setUnavailable((prev) => {
      const next = { ...prev, [name]: !prev[name] };
      localStorage.setItem(
        "klassy-unavailable",
        JSON.stringify({ date: new Date().toDateString(), items: next })
      );
      return next;
    });
  };

  const updateQty = (name: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(0, (prev[name] || 0) + delta),
    }));
  };

  const allItems = getAllItems();
  const selectedItems = allItems.filter((p) => (quantities[p.name] || 0) > 0);

  const totalPrice = selectedItems.reduce(
    (sum, p) => sum + p.price * (quantities[p.name] || 0),
    0
  );

  const orderMessage = encodeURIComponent(
    `Hi! I'd like to order:\n${selectedItems
      .map((p) => `• ${p.name} (${formatPrice(p.price)}) x ${quantities[p.name]}`)
      .join("\n")}\n\nTotal: ${formatPrice(totalPrice)}`
  );

  const isUnavailable = (name: string) => !!unavailable[name];
  const availableCount = allItems.filter((i) => !isUnavailable(i.name)).length;

  const renderItem = (item: MenuItem) => {
    const qty = quantities[item.name] || 0;
    const soldOut = isUnavailable(item.name);
    return (
      <div
        key={item.name}
        className={`flex items-center gap-4 bg-card rounded-2xl border p-3 transition-shadow hover:shadow-md ${
          soldOut
            ? "opacity-50 border-border"
            : qty > 0
            ? "border-primary/40 shadow-sm"
            : "border-border"
        }`}
      >
        {editMode && (
          <div className="flex-shrink-0">
            <Checkbox
              checked={!soldOut}
              onCheckedChange={() => toggleAvailability(item.name)}
              aria-label={`Mark ${item.name} as ${soldOut ? "available" : "finished"}`}
            />
          </div>
        )}
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover flex-shrink-0"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-semibold text-card-foreground text-base md:text-lg">
              {item.name}
              {soldOut && (
                <span className="ml-2 text-xs font-body text-destructive font-semibold">
                  Finished
                </span>
              )}
            </h3>
            <span className="font-display font-bold text-primary text-base md:text-lg whitespace-nowrap">
              {formatPrice(item.price)}
            </span>
          </div>
          <p className="text-muted-foreground text-sm font-body mt-1 line-clamp-2">
            {item.description}
          </p>
          {!soldOut && (
            <div className="flex items-center gap-3 mt-2">
              <div className="inline-flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => updateQty(item.name, -1)}
                  className="p-1.5 hover:bg-muted transition-colors text-muted-foreground"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-3 text-sm font-display font-semibold text-card-foreground min-w-[2rem] text-center">
                  {qty}
                </span>
                <button
                  onClick={() => updateQty(item.name, 1)}
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
        </div>
      </div>
    );
  };

  return (
    <section id="menu" className="py-16 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Today's Available Meals Banner */}
        <div className="bg-card border border-border rounded-2xl p-4 mb-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Check size={20} className="text-accent" />
            <h2 className="text-xl md:text-2xl font-bold font-display text-foreground">
              Today's Available Meals
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-sm">
            <span className="font-semibold text-accent">{availableCount}</span> of{" "}
            {allItems.length} items available today — Order now! 🎉
          </p>
          <button
            onClick={() => setEditMode((v) => !v)}
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <Settings size={14} />
            {editMode ? "Done editing" : "Update availability"}
          </button>
        </div>

        {menuCategories.map((category, idx) => (
          <div key={category.title} className={idx > 0 ? "mt-14" : ""}>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
                {category.emoji} {category.title}
              </h2>
              <p className="text-muted-foreground font-body text-lg">
                {category.subtitle}
              </p>
            </div>
            <div className="space-y-3">
              {category.items.map(renderItem)}
            </div>
          </div>
        ))}

        {selectedItems.length > 0 && (
          <div className="sticky bottom-4 mt-8 bg-card border border-border rounded-2xl p-4 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-sm font-body text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {selectedItems.length} item{selectedItems.length > 1 ? "s" : ""}
                </span>{" "}
                — Total:{" "}
                <span className="font-bold text-primary text-base">{formatPrice(totalPrice)}</span>
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
            <p className="text-muted-foreground font-body mb-4">
              Select items above, then send your order
            </p>
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
