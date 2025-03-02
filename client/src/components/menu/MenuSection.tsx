import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  isSignature?: boolean;
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
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-6 ${item.isSignature ? 'bg-primary/5 p-4 rounded-lg' : ''}`}>
              {item.image && (
                <div className="w-full md:w-1/3">
                  <AspectRatio ratio={4/3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-lg object-cover h-full w-full"
                    />
                  </AspectRatio>
                </div>
              )}
              <div className={`flex-1 flex justify-between gap-4 ${item.image ? 'md:pt-4' : ''}`}>
                <div>
                  <h4 className="font-medium flex items-center gap-2">
                    {item.name}
                    {item.isSignature && (
                      <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded">
                        Signature
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="text-lg font-semibold whitespace-nowrap">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}