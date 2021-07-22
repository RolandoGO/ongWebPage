import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import News from "../screens/news";
import About from "../screens/about";
import Details from "../screens/news/details";
import Contact from "../screens/contact";
import FooterWeb from "../components/FooterWeb";
import HeaderWeb from "../components/HeaderWeb";

export const PublicRoute = () => {
  return (
    <div>
      <HeaderWeb isLogIn={false} />

      <Switch>
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/novedades" component={News} />
        <Route exact path="/nosotros" component={About} />
        <Route exact path="/novedades/:id" component={Details} />
        <Route path="/" component={Home} />
      </Switch>

      <FooterWeb />
    </div>
  );
};
