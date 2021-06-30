import React from "react";
import { HeaderBackOffice } from "../components/HeaderBackOffice";
import WellcomeMsg from "../components/WellcomeMsg";
import BackofficeCategories from "../components/BackofficeCategories";
import { ActivitiesScreen } from "./ActivitiesScreen";
import { Switch,Route, Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <HeaderBackOffice />

      
       
        <div className="container mt-4">
          <Switch>

            <Route exact path="/backoffice" component={WellcomeMsg} />
            <Route exact path="/backoffice/categories" component={BackofficeCategories} />
            <Route exact path="/backoffice/activities" component={ActivitiesScreen} />

          </Switch>

        </div>
    </>
  );
}

export default Dashboard;
