import { Router, Route, Switch, useLocation } from "wouter";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Events from "@/pages/Events";
import Contact from "@/pages/Contact";
import Reservation from "@/pages/Reservation";
import NotFound from "@/pages/not-found";

function AppRoutes() {
  const [location] = useLocation(); // Hook to detect location

  return (
    <Switch location={location}>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      <Route path="/reservation" component={Reservation} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function AppRouter() {
  return (
    <Router base="/Bistro">
      <AppRoutes />
    </Router>
  );
}
