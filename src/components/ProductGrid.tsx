import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const WHATSAPP_NUMBER = "2348012345678"; // Replace with your number

const products = [
  {
    name: "Jollof Rice Combo",
    price: "₦3,500",
    image: product1,
    description: "Smoky jollof rice with fried plantain and peppered chicken.",
  },
  {
    name: "Birthday Cake",
    price: "₦25,000",
    image: product2,
    description: "Custom layered cake with cream frosting and fresh berries.",
  },
  {
    name: "Designer Perfume",
    price: "₦15,000",
    image: product3,
    description: "Long-lasting luxury fragrance. Unisex, 100ml bottle.",
  },
  {
    name: "Knotless Braids",
    price: "₦20,000",
    image: product4,
    description: "Neat knotless braids, waist-length. Lasts 6-8 weeks.",
  },
  {
    name: "Thrift Outfit Bundle",
    price: "₦8,000",
    image: product5,
    description: "Curated vintage outfit with accessories. Fresh & unique.",
  },
  {
    name: "Small Chops Pack",
    price: "₦5,000",
    image: product6,
    description: "Meat pie, spring rolls & puff-puff. Perfect for events.",
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-3">
            Our Products
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Tap any item to order instantly via WhatsApp
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              {...product}
              whatsappNumber={WHATSAPP_NUMBER}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
