import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import News from "../screens/News";

export const PublicRoute = () => {
  return (
    <Switch>
      <Route exact path="/novedades" component={News} />
      <Route path="/" component={Home} />
    </Switch>
  );
};