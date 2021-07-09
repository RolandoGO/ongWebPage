import React from "react";
import { HeaderBackOffice } from "../components/HeaderBackOffice";
import WellcomeMsg from "../components/WellcomeMsg";
import BackofficeCategories from "../components/BackofficeCategories";
import { ActivitiesScreen } from "./ActivitiesScreen";
import { Switch, Route } from "react-router-dom";
import Members from "./Members";

function Dashboard() {
  return (
    <>
      <HeaderBackOffice />

      <div className="container mt-4">
        <Switch>
          <Route exact path="/backoffice" component={WellcomeMsg} />
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
          <Route exact path="/backoffice/members" component={Members} />
        </Switch>
      </div>
    </>
  );
}

export default Dashboard;
