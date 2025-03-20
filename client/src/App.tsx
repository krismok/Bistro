import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Events from "@/pages/Events";
import Contact from "@/pages/Contact";
import Reservation from "@/pages/Reservation";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation(); // Hook to detect location

  return (
    <Switch location={location} base="/Bistro">
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      <Route path="/reservation" component={Reservation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow pt-16">
          <Router />
        </div>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
