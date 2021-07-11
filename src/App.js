import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import BackofficeCategories from "./components/BackofficeCategories";
import { ActivitiesScreen } from "./screens/ActivitiesScreen";
import BackOfficeSlide from "./components/BackOfficeSlides";
import HomeScreen from "./screens/HomeScreen";

// import Nosotros from "./screens/Nosotros";
// import Novedades from "./screens/Novedades";
// import Actividades from "./screens/Actividades";
// import Contacto from "./screens/Contacto";
// import Contribuye from "./screens/Contribuye";
// import Testimonios from "./screens/Testimonios";

const App = () => {
  //Check if a token exists in localstorage
  const token = localStorage.getItem("token");
  if (token) {
    console.log("authenticated user");
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
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
        <Route exact path="/backoffice/slides" component={BackOfficeSlide} />
        <Route exact path="/backoffice/slides/create"/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
