import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../screens/Dashboard"
import {ActivitiesScreen} from "../screens/ActivitiesScreen"
import {MembersFormBackOffice} from "../Components/MembersFormBackOffice"
import BackOfficeSlide from "../Components/BackOfficeSlides";
// import {BackofficeCategories} from "../Components/BackofficeCategories";
export const Admin = () => {
  return (

      <Switch>
          <h1>ADMI</h1>
        <Route exact path="/backoffice" component={Dashboard} />
        {/* <Route
          exact
          path="/backoffice/categories"
          component={BackofficeCategories}
        /> */}
        <Route
          exact
          path="/backoffice/activities"
          component={ActivitiesScreen}
        />
        <Route
          exact
          path="/backoffice/organization/edit"
          component={MembersFormBackOffice}
        />
        <Route exact path="/backoffice/slides" component={BackOfficeSlide} />
        <Route exact path="/backoffice/slides/create" />
      </Switch>
 
  );
};
