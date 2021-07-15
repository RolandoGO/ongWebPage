import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import { ActivitiesScreen } from "../screens/ActivitiesScreen";
import { MembersFormBackOffice } from "../Components/MembersFormBackOffice";
import BackOfficeSlide from "../Components/BackOfficeSlides";
import BackofficeCategories from "../Components/BackofficeCategories";
export const Admin = () => {
  return (
    <Switch>
      <Route exact path="/admin/backoffice" component={Dashboard} />
      <Route
        exact
        path="/admin/backoffice/categories"
        component={BackofficeCategories}
      />
      <Route path="/admin/backoffice/activities" component={ActivitiesScreen} />
      <Route
        path="/admin/backoffice/organization/edit"
        component={MembersFormBackOffice}
      />
      <Route path="/admin/backoffice/slides" component={BackOfficeSlide} />
      <Route path="/admin/backoffice/slides/create" />
    </Switch>
  );
};
