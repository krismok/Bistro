import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Story() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2010, Bistro has been at the forefront of contemporary dining,
              combining traditional techniques with modern innovation.
            </p>
            <p className="text-muted-foreground">
              Our passionate team of chefs creates unforgettable dining experiences
              using the finest locally-sourced ingredients, served in an atmosphere
              of understated elegance.
            </p>
          </div>
          <div>
            <AspectRatio ratio={4/3}>
              <img
                src="https://images.unsplash.com/photo-1445510861639-5651173bc5d5"
                alt="Restaurant interior"
                className="rounded-lg object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
