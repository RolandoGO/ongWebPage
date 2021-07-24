import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function ProtectedBackOffice({ component: Comp, ...rest }) {
  const Auth= useSelector((state) => state.userInfo)
  const result = Auth.user.role_id;
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
