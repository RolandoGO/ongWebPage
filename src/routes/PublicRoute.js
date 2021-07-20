import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import News from "../screens/News";
import Contact from "../screens/contact";
import Activities from "../screens/activities";

export const PublicRoute = () => {
  return (
    <Switch>
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/novedades" component={News} />
      <Route exact path="/actividades" component={Activities} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
