import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
// import Nosotros from "./screens/Nosotros";
// import Novedades from "./screens/Novedades";
// import Actividades from "./screens/Actividades";
// import Contacto from "./screens/Contacto";
// import Contribuye from "./screens/Contribuye";
// import Testimonios from "./screens/Testimonios";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/backoffice" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
