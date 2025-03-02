import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between gap-4">
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <div className="text-lg font-semibold">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
