import React from "react";
import { Route } from "react-router-dom";
import Home from "../screens/Home";
import News from "../screens/News";
import Contact from "../screens/contact";
import Activities from "../screens/activities";
import { AnimatedSwitch } from "react-router-transition";
import FooterWeb from "../components/FooterWeb";

import HeaderWeb from "../components/HeaderWeb";
export const PublicRoute = () => {
  return (
    <>
      <HeaderWeb />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 1 }}
        atActive={{ opacity: 1 }}
      >
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/novedades" component={News} />
        <Route exact path="/actividades" component={Activities} />
        <Route path="/" component={Home} />
      </AnimatedSwitch>
      <FooterWeb />
    </>
  );
};
