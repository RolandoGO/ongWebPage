import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "../screens/Home";

export const PublicRoute = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  ); 
};
