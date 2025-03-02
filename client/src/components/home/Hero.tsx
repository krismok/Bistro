import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center text-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1481277542470-605612bd2d61')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)"
        }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Bistro
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Experience contemporary cuisine in an elegant atmosphere
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/menu">View Menu</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Make a Reservation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
