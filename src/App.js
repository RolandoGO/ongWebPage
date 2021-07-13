import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Public, PublicRoute } from "./routes/PublicRoute";
import { Admin } from "./routes/Admin";

const App = () => {
  //Check if a token exists in localstorage
  const token = localStorage.getItem("token");
  if (token) {
    console.log("authenticated user");
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PublicRoute} />
        {/* Future Protected route */}
        <Route  path="/admin" component={Admin} />       
      </Switch>
    </BrowserRouter>
  );
};

export default App;
