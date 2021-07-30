import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoutes from "./ProtectedRoutes";
import Hero from "./pages/Hero";

const Routes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/forgetpassword" exact component={ForgetPassword} />
     
          <ProtectedRoutes path="/:displayName/:uid" exact>
            <Hero />
          </ProtectedRoutes>
         
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routes;
