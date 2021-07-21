import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import News from "../screens/news/index";
import Contact from "../screens/contact";

export const PublicRoute = () => {
  return (
    <Switch>
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/novedades" component={News} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
