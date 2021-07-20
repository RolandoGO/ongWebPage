import React from "react";
import { Route } from "react-router-dom";
import Home from "../screens/Home";
import News from "../screens/News";
import Contact from "../screens/contact";
import { AnimatedSwitch } from "react-router-transition";

export const PublicRoute = () => {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 1 }}
      atActive={{ opacity: 1 }}
    >
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/novedades" component={News} />
      <Route path="/" component={Home} />
    </AnimatedSwitch>
  );
};
