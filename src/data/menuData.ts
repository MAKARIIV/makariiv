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

// Nigerian main dishes
import jollofRiceImg from "@/assets/jollof-rice.jpg";
import friedRiceImg from "@/assets/fried-rice.jpg";
import ofadaRiceImg from "@/assets/ofada-rice.jpg";
import poundedYamEgusiImg from "@/assets/pounded-yam-egusi.jpg";
import amalaEweduImg from "@/assets/amala-ewedu.jpg";
import ebaOgbonoImg from "@/assets/eba-ogbono.jpg";
import suyaImg from "@/assets/suya.jpg";
import asunImg from "@/assets/asun.jpg";
import pepperedSnailImg from "@/assets/peppered-snail.jpg";
import moiMoiImg from "@/assets/moi-moi.jpg";
import friedPlantainImg from "@/assets/fried-plantain.jpg";
import beansPlantainImg from "@/assets/beans-plantain.jpg";

export interface MenuItem {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface MenuCategory {
  title: string;
  emoji: string;
  subtitle: string;
  items: MenuItem[];
}

export const WHATSAPP_NUMBER = "2348060026486";

export const menuCategories: MenuCategory[] = [
  {
    title: "Platters",
    emoji: "🍽️",
    subtitle: "Small chops for every occasion",
    items: [
      { name: "Single Pack", price: 3000, description: "2 spring rolls, 1 samosa, 1 pc spicy chicken or beef, 4 puffs", image: singlePackImg },
      { name: "Mini Platter", price: 12000, description: "5 spring rolls, 5 samosa, 10 puff puff, 3 pcs spicy chicken, pepper sauce", image: miniPlatterImg },
      { name: "Medium Platter", price: 15500, description: "7 spring rolls, 7 samosa, 15 puff puff, 4 pcs spicy chicken, pepper sauce", image: mediumPlatterImg },
      { name: "Family Platter", price: 25500, description: "10 spring rolls, 10 samosa, 20 puff puff, 2 large corndogs, 6 pcs spicy chicken, pepper sauce", image: familyPlatterImg },
      { name: "Xtra Large Platter", price: 35000, description: "12 spring rolls, 12 samosa, 30 puff puff, 4 large corndogs, 10 pcs spicy chicken, pepper sauce", image: xtraLargePlatterImg },
      { name: "Premium Platter", price: 80500, description: "20 spring rolls, 20 samosa, 20 mosa, 50 puffs, 10 corndogs, pepper sauce, 5 pcs spicy turkey, 10 pcs spicy chicken, 5 pcs gizzard or beef kebab", image: premiumPlatterImg },
    ],
  },
  {
    title: "Rice Dishes",
    emoji: "🍚",
    subtitle: "Classic Nigerian rice meals",
    items: [
      { name: "Jollof Rice", price: 3500, description: "Smoky party jollof with fried plantain & chicken", image: jollofRiceImg },
      { name: "Fried Rice", price: 3500, description: "Mixed vegetables fried rice with shrimp & liver", image: friedRiceImg },
      { name: "Ofada Rice & Ayamase", price: 4000, description: "Local ofada rice with spicy green pepper sauce", image: ofadaRiceImg },
    ],
  },
  {
    title: "Swallow & Soups",
    emoji: "🥘",
    subtitle: "Traditional Nigerian swallow with rich soups",
    items: [
      { name: "Pounded Yam & Egusi", price: 4500, description: "Smooth pounded yam with egusi soup, assorted meat", image: poundedYamEgusiImg },
      { name: "Amala & Ewedu/Gbegiri", price: 4000, description: "Amala with ewedu and gbegiri soup, assorted meat", image: amalaEweduImg },
      { name: "Eba & Ogbono", price: 3500, description: "Eba with draw ogbono soup, fish & meat", image: ebaOgbonoImg },
    ],
  },
  {
    title: "Grilled & Peppered",
    emoji: "🔥",
    subtitle: "Smoky grilled proteins & pepper sauce",
    items: [
      { name: "Beef Suya", price: 3000, description: "Spicy grilled beef skewers with yaji", image: suyaImg },
      { name: "Asun", price: 4500, description: "Peppered grilled goat meat with onions", image: asunImg },
      { name: "Peppered Snail", price: 5000, description: "Spicy peppered snails in rich sauce", image: pepperedSnailImg },
    ],
  },
  {
    title: "Sides & More",
    emoji: "🫘",
    subtitle: "Tasty sides to complete your meal",
    items: [
      { name: "Moi Moi", price: 1500, description: "Steamed bean pudding with egg", image: moiMoiImg },
      { name: "Fried Plantain (Dodo)", price: 1000, description: "Golden fried ripe plantain", image: friedPlantainImg },
      { name: "Beans & Plantain", price: 2500, description: "Porridge beans with fried plantain", image: beansPlantainImg },
    ],
  },
  {
    title: "Small Chops Extras",
    emoji: "➕",
    subtitle: "Add individual items to your order",
    items: [
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
    ],
  },
];

export const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

export const getAllItems = () => menuCategories.flatMap((c) => c.items);
