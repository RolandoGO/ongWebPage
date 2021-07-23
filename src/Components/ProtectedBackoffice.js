import React, { useCallback } from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedBackOffice({ component: Comp, ...rest }) {
  
  const result = auth.role_id;
  if (result === 1) {
    Admin === true;
  } else {
    Admin === false;
  }
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
