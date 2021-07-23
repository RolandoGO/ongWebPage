import React from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Home from "../screens/Home";
import News from "../screens/news";
import Contact from "../screens/contact";
import Testimonials from "../screens/testimonials";
import Activities from "../screens/activities";
import About from "../screens/About"
import FooterWeb from "../components/FooterWeb";
import Details from "../screens/news/details"
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
        <Route exact path="/testimonios" component={Testimonials} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/novedades" component={News} />
        <Route exact path="/novedades/:id" component={Details} />
        <Route exact path="/nosotros" component={About} />
        <Route exact path="/actividades" component={Activities} />
        <Route path="/" component={Home} />
      </AnimatedSwitch>
      <FooterWeb />
    </>
  );
};
