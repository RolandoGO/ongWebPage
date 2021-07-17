import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import News from "../screens/news";
import About from "../screens/about";

export const PublicRoute = () => {
  return (
    <Switch>
      <Route exact path="/novedades" component={News} />
      <Route exact path="/nosotros" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
