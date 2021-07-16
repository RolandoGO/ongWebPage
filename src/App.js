import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import BackofficeCategories from "./components/BackofficeCategories";
import BackOfficeSlide from "./components/BackOfficeSlides";
import { ActivitiesScreen } from "./screens/ActivitiesScreen";
import Screen from "./screens/home";
import BackofficeOrganization from "./screens/BackofficeOrganizationScreen";
import { MembersFormBackOffice } from "./components/MembersFormBackOffice";

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
        <Route exact path="/" component={Screen} />
        <Route exact path="/backoffice" component={Dashboard} />
        <Route
          exact
          path="/backoffice/categories"
          component={BackofficeCategories}
        /> */}
        <Route
          exact
          path="/backoffice/activities"
          component={ActivitiesScreen}
        />
        {/* <Route
          exact
          path="/backoffice/organization/edit"
          component={MembersFormBackOffice}
        />
        <Route exact path="/backoffice/slides" component={BackOfficeSlide} />
        <Route exact path="/backoffice/slides/create"/> */}
        <Route exact path="/backoffice/organization"  component={BackofficeOrganization}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
