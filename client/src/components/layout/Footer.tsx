import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-6xl px-4 md:px-8"> 
        <div>
          <h3 className="text-lg font-semibold mb-4">Bistro</h3>
          <p className="text-muted-foreground">
            123 Restaurant Street<br />
            City, State 12345<br />
            (555) 123-4567
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Hours</h3>
          <p className="text-muted-foreground">
            Mon-Thu: 11am - 10pm<br />
            Fri-Sat: 11am - 11pm<br />
            Sun: 11am - 9pm
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <div className="flex gap-2">
            <Input placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
