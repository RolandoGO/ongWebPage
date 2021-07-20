import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import News from "../screens/news";
import Details from "../screens/news/details";
import Contact from "../screens/contact";

export const PublicRoute = () => {
  return (
    <Switch>
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/novedades" component={News} />
      <Route exact path="/novedades/:id" component={Details} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
