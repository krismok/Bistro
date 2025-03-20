import { MenuSection } from "@/components/menu/MenuSection";
import bruleeImg from "@/assets/img/brulee_img.jpg";

const menuData = {
  starters: [
    {
      name: "Grilled Octopus",
      description: "With smoked paprika and olive oil",
      price: "$18",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
      isSignature: true,
    },
    {
      name: "Beef Tartare",
      description: "Hand-cut beef with traditional garnishes",
      price: "$16",
    },
  ],
  mains: [
    {
      name: "Duck Breast",
      description: "With cherry sauce and root vegetables",
      price: "$34",
      image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369",
      isSignature: true,
    },
    {
      name: "Sea Bass",
      description: "Pan-seared with herb butter sauce",
      price: "$32",
    },
  ],
  desserts: [
    {
      name: "Crème Brûlée",
      description: "Classic vanilla bean custard",
      price: "$12",
      image: bruleeImg,
      isSignature: true,
    },
    {
      name: "Chocolate Soufflé",
      description: "With vanilla ice cream",
      price: "$10",
    },
  ],
};

export default function Menu() {
  return (
    <main className="container mx-auto max-w-6xl px-4 md:px-8 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      <div className="grid gap-8 max-w-4xl mx-auto">
        <MenuSection title="Starters" items={menuData.starters} />
        <MenuSection title="Main Courses" items={menuData.mains} />
        <MenuSection title="Desserts" items={menuData.desserts} />
      </div>
    </main>
  );
}