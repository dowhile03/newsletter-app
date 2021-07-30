import React from "react";
import { Redirect, Route } from "react-router-dom";
import { auth } from "./Firebase";

function ProtectedRoutes({ children, ...rest }) {

  const user = auth.currentUser;
  
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        } else {
          if(!localStorage.getItem('user')){
          return (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
          } else{
            return children
          }
        }
      }}
    />
  );
}

export default ProtectedRoutes;
