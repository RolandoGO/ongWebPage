import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
// import Nosotros from "./Screens/Nosotros";
// import Novedades from "./Screens/Novedades";
// import Actividades from "./Screens/Actividades";
// import Contacto from "./Screens/Contacto";
// import Contribuye from "./Screens/Contribuye";
// import Testimonios from "./Screens/Testimonios";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
