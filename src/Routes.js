import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoutes from "./ProtectedRoutes";
import Hero from "./pages/Hero";
import CategoryList from "./components/Categories/CategoryList";
import Admin from "./pages/Admin";
import AdminSection from "./pages/AdminSection";

const Routes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/forgetpassword" exact component={ForgetPassword} />
          <Route path="/Admin" exact component={Admin} />
    
          <ProtectedRoutes path="/:displayName/:uid" exact>
            <Hero />
          </ProtectedRoutes>
          <ProtectedRoutes path="/adminsection" exact>
            < AdminSection/>
          </ProtectedRoutes>
          <ProtectedRoutes path="/:displayName/:uid/:categoryId/:category" exact>
        <CategoryList/>
          </ProtectedRoutes>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routes;
