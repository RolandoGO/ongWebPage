import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { PublicRoute } from "./routes/PublicRoute";
import { Admin } from "./routes/Admin";

const App = () => {
  //Check if a token exists in localstorage
  const token = localStorage.getItem("token");
  if (token) {
    console.log("authenticated user");
  }

  useEffect(()=>{
    getContacts()
  },[])

  return (
    <BrowserRouter>
      <Switch>
        {/* Future Protected route */}
        <Route path="/backoffice" component={Admin} />
        <Route path="/" component={PublicRoute} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
