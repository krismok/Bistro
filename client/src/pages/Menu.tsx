import { MenuSection } from "@/components/menu/MenuSection";

const menuData = {
  starters: [
    {
      name: "Grilled Octopus",
      description: "With smoked paprika and olive oil",
      price: "$18",
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
    },
    {
      name: "Sea Bass",
      description: "Pan-seared with herb butter sauce",
      price: "$32",
    },
  ],
  desserts: [
    {
      name: "Chocolate Soufflé",
      description: "With vanilla ice cream",
      price: "$12",
    },
    {
      name: "Crème Brûlée",
      description: "Classic vanilla bean custard",
      price: "$10",
    },
  ],
};

export default function Menu() {
  return (
    <main className="container py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      <div className="grid gap-8 max-w-3xl mx-auto">
        <MenuSection title="Starters" items={menuData.starters} />
        <MenuSection title="Main Courses" items={menuData.mains} />
        <MenuSection title="Desserts" items={menuData.desserts} />
      </div>
    </main>
  );
}
