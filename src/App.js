import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import BackofficeCategories from "./screens/BackofficeCategories";
import { ActivitiesScreen } from "./Screens/ActivitiesScreen";

// import Nosotros from "./screens/Nosotros";
// import Novedades from "./screens/Novedades";
// import Actividades from "./screens/Actividades";
// import Contacto from "./screens/Contacto";
// import Contribuye from "./screens/Contribuye";
// import Testimonios from "./screens/Testimonios";

const App = () => {
  //Check if a token exists in localstorage
  const token = localStorage.getItem('token');
  if(token) {
    console.log('authenticated user');
  };

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/backoffice" component={Dashboard} />
        <Route
          exact
          path="/backoffice/categories"
          component={BackofficeCategories}
        />
        <Route
          exact
          path="/backoffice/activities"
          component={ActivitiesScreen}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
