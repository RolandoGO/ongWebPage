import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../screens/Home";

export const PublicRoute = () => {
  return (
    <Switch>
      <Route path="/prueba" component={Home} />
    </Switch>
  );
};
