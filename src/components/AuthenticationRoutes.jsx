import * as React from 'react'
import { Redirect, Route } from 'react-router-dom';

function AuthenticationRoutes({ children, ...rest }) {
  //esta es una llamada falsa a un método que debe devolver si el usuario está autenticado. 
  //Reemplazar por el método real
  const { auth } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default AuthenticationRoutes;