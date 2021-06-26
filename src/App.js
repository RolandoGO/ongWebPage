import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
import Nosotros from "./Screens/Nosotros";
import Novedades from "./Screens/Novedades";
import Actividades from "./Screens/Actividades";
import Contacto from "./Screens/Contacto";
import Contribuye from "./Screens/Contribuye";
import Testimonios from "./Screens/Testimonios";


function App() {

  //Fake Token: this token will come from the localstorage once the user is authenticated.
  const fakeToken = '837498123694819287412';
  const setToken = () => {
    localStorage.setItem('token', fakeToken);
  };
  setToken();


  //Check if a token exists in localstorage
  const token = localStorage.getItem('token');
  if(token) {
    console.log('authenticated user');
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Nosotros} />
        <Route exact path="/" component={Actividades} />
        <Route exact path="/" component={Novedades} />
        <Route exact path="/" component={Testimonios} />
        <Route exact path="/" component={Contacto} />
        <Route exact path="/" component={Contribuye} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
