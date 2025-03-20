import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/Bistro/home", label: "Home" },
    { href: "/Bistro/menu", label: "Menu" },
    { href: "/Bistro/reservation", label: "Book Now" },
    { href: "/Bistro/events", label: "Events" },
    { href: "/Bistro/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <nav className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/Bistro/home">
            <a className="mr-6 flex items-center space-x-2">
              <span className="text-2xl font-bold">Bistro</span>
            </a>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Button
                  variant={location === link.href ? "default" : "ghost"}
                  asChild
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}