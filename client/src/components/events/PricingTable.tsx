import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface PricingTableProps {
  packages: Package[];
}

export function PricingTable({ packages }: PricingTableProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {packages.map((pkg, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{pkg.name}</CardTitle>
            <CardDescription>{pkg.description}</CardDescription>
            <div className="text-3xl font-bold mt-4">{pkg.price}</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-6">Book Now</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
