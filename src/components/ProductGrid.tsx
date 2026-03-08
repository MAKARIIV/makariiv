import { useState } from "react";
import { MessageCircle, Plus, Minus } from "lucide-react";

import singlePackImg from "@/assets/single-pack.jpg";
import miniPlatterImg from "@/assets/mini-platter.jpg";
import mediumPlatterImg from "@/assets/medium-platter.jpg";
import familyPlatterImg from "@/assets/family-platter.jpg";
import xtraLargePlatterImg from "@/assets/xtra-large-platter.jpg";
import premiumPlatterImg from "@/assets/premium-platter.jpg";
import springRollsImg from "@/assets/spring-rolls.jpg";
import samosaImg from "@/assets/samosa.jpg";
import chickenImg from "@/assets/chicken.jpg";
import beefImg from "@/assets/beef.jpg";
import gizzardKebabImg from "@/assets/gizzard-kebab.jpg";
import puffsImg from "@/assets/puffs.jpg";
import mosaImg from "@/assets/mosa.jpg";
import moneyBagImg from "@/assets/money-bag.jpg";
import snailsImg from "@/assets/snails.jpg";
import turkeyImg from "@/assets/turkey.jpg";
import midWingImg from "@/assets/mid-wing.jpg";
import pepperSauceImg from "@/assets/pepper-sauce.jpg";
import chinchinImg from "@/assets/chinchin.jpg";

const WHATSAPP_NUMBER = "2348060026486";

interface MenuItem {
  name: string;
  price: number;
  description: string;
  image: string;
}

const platters: MenuItem[] = [
  { name: "Single Pack", price: 3000, description: "2 spring rolls, 1 samosa, 1 pc spicy chicken or beef, 4 puffs", image: singlePackImg },
  { name: "Mini Platter", price: 12000, description: "5 spring rolls, 5 samosa, 10 puff puff, 3 pcs spicy chicken, pepper sauce", image: miniPlatterImg },
  { name: "Medium Platter", price: 15500, description: "7 spring rolls, 7 samosa, 15 puff puff, 4 pcs spicy chicken, pepper sauce", image: mediumPlatterImg },
  { name: "Family Platter", price: 25500, description: "10 spring rolls, 10 samosa, 20 puff puff, 2 large corndogs, 6 pcs spicy chicken, pepper sauce", image: familyPlatterImg },
  { name: "Xtra Large Platter", price: 35000, description: "12 spring rolls, 12 samosa, 30 puff puff, 4 large corndogs, 10 pcs spicy chicken, pepper sauce", image: xtraLargePlatterImg },
  { name: "Premium Platter", price: 80500, description: "20 spring rolls, 20 samosa, 20 mosa, 50 puffs, 10 corndogs, pepper sauce, 5 pcs spicy turkey, 10 pcs spicy chicken, 5 pcs gizzard or beef kebab", image: premiumPlatterImg },
];

const extras: MenuItem[] = [
  { name: "Spring Rolls", price: 500, description: "1 piece", image: springRollsImg },
  { name: "Samosa", price: 500, description: "1 piece", image: samosaImg },
  { name: "Chicken", price: 2000, description: "Spicy chicken", image: chickenImg },
  { name: "Beef", price: 800, description: "1 piece", image: beefImg },
  { name: "Gizzard Kebab", price: 1500, description: "1 stick", image: gizzardKebabImg },
  { name: "Puffs (10 pcs)", price: 1000, description: "10 pieces", image: puffsImg },
  { name: "Mosa", price: 150, description: "1 piece", image: mosaImg },
  { name: "Money Bag", price: 400, description: "1 piece", image: moneyBagImg },
  { name: "Snails", price: 1200, description: "1 piece", image: snailsImg },
  { name: "Turkey Part", price: 3000, description: "1 piece", image: turkeyImg },
  { name: "Mid Wing", price: 7000, description: "Per portion", image: midWingImg },
  { name: "Extra Pepper Sauce", price: 300, description: "1 portion", image: pepperSauceImg },
  { name: "Chinchin (2.3kg)", price: 19500, description: "2.3kg pack", image: chinchinImg },
];

const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

const ProductGrid = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const updateQty = (name: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(0, (prev[name] || 0) + delta),
    }));
  };

  const allItems = [...platters, ...extras];
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

  const renderItem = (item: MenuItem) => {
    const qty = quantities[item.name] || 0;
    return (
      <div
        key={item.name}
        className={`flex items-center gap-4 bg-card rounded-2xl border p-3 transition-shadow hover:shadow-md ${
          qty > 0 ? "border-primary/40 shadow-sm" : "border-border"
        }`}
      >
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
            </h3>
            <span className="font-display font-bold text-primary text-base md:text-lg whitespace-nowrap">
              {formatPrice(item.price)}
            </span>
          </div>
          <p className="text-muted-foreground text-sm font-body mt-1 line-clamp-2">
            {item.description}
          </p>
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
        </div>
      </div>
    );
  };

  return (
    <section id="menu" className="py-16 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
            🍽️ Platters
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Small chops for every occasion
          </p>
        </div>
        <div className="space-y-3 mb-14">
          {platters.map(renderItem)}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-2">
            ➕ Extras
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Add individual items to your order
          </p>
        </div>
        <div className="space-y-3">
          {extras.map(renderItem)}
        </div>

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
