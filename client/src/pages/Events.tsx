import { PricingTable } from "@/components/events/PricingTable";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const eventPackages = [
  {
    name: "Intimate Gathering",
    price: "$75 per person",
    description: "Perfect for small celebrations",
    features: [
      "Up to 20 guests",
      "3-course menu",
      "Welcome drinks",
      "Dedicated server",
    ],
  },
  {
    name: "Corporate Event",
    price: "$95 per person",
    description: "Ideal for business functions",
    features: [
      "Up to 50 guests",
      "4-course menu",
      "Open bar",
      "AV equipment",
    ],
  },
  {
    name: "Grand Celebration",
    price: "$125 per person",
    description: "For special occasions",
    features: [
      "Up to 100 guests",
      "5-course menu",
      "Premium bar package",
      "Event coordinator",
    ],
  },
];

export default function Events() {
  return (
    <main className="container py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Private Events</h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <AspectRatio ratio={4/3}>
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
              alt="Event space"
              className="rounded-lg object-cover"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">
            Host Your Next Event With Us
          </h2>
          <p className="text-muted-foreground mb-4">
            Whether you're planning a corporate event, wedding reception,
            or private celebration, our versatile spaces and experienced
            team will ensure your event is memorable.
          </p>
        </div>
      </div>

      <PricingTable packages={eventPackages} />
    </main>
  );
}
