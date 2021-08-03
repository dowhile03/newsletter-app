import React from "react";
import { Redirect, Route } from "react-router-dom";
import { auth } from "./Firebase";

function AdminProtectedRoute({ children, ...rest }) {

  const user = auth.currentUser;
  
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user.email === "kartikey110813@gmail.com") {
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

export default AdminProtectedRoute;
