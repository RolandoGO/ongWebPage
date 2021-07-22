import React, { useCallback } from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedBackOffice({ component: Comp, ...rest }) {
  // Reemplazar por resultado real
  const Admin = true;

  const authUser = useCallback(() => {
    if (Admin) {
      return <Comp />;
    } else {
      return <Redirect to="/" />;
    }
  }, [Admin, Comp]);

  return <Route {...rest}>{authUser}</Route>;
}

export default ProtectedBackOffice;
