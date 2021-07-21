import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/Home";
import News from "../screens/news";
import About from "../screens/about";
import Details from "../screens/news/details";
import Contact from "../screens/contact";

export const PublicRoute = () => {
  return (
    <Switch>
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/novedades" component={News} />
      <Route exact path="/nosotros" component={About} />
      <Route exact path="/novedades/:id" component={Details} />
      <Route
        exact
        path="/actividad/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <Activity id={id} />;
        }}
      />
      <Route path="/" component={Home} />
    </Switch>
  );
};
