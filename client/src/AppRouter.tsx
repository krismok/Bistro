import { Router, Route, Switch, useLocation, Redirect } from "wouter";
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
      <Route path="/Bistro" component={() => <Redirect to="/Bistro/home" />} />
      <Route path="/Bistro/home" component={Home} />
      <Route path="/Bistro/menu" component={Menu} />
      <Route path="/Bistro/events" component={Events} />
      <Route path="/Bistro/contact" component={Contact} />
      <Route path="/Bistro/reservation" component={Reservation} />
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
