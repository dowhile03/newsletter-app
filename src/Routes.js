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
import Admin from "./pages/admin/Admin";
import AdminSection from "./pages/admin/AdminSection";
import AdminProtectedRoute from "./AdminProtectedRoute";
import AddNewsletter from "./pages/admin/AddNewsletter";
import AddCategory from "./pages/admin/AddCategory";
import AddTrending from "./pages/admin/AddTrending";



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
          <Route path="/newsletter/categories" exact component = {Hero} />
          <Route path="/:categoryId/:category" exact component={CategoryList}/>

          <AdminProtectedRoute path="/addtrending" exact>
          <AddTrending/>
          </AdminProtectedRoute>
          
          <AdminProtectedRoute path="/:id/:cat/addnewsletter" exact >

            <AddNewsletter/>
          </AdminProtectedRoute>
          <AdminProtectedRoute path="/addcategory" exact>
            <AddCategory/>
          </AdminProtectedRoute>
          <AdminProtectedRoute path="/addnewsletter/:category" exact >
            <AddNewsletter/>
          </AdminProtectedRoute>
            <AdminProtectedRoute path="/adminsection" exact >
            <AdminSection/>
          </AdminProtectedRoute>
          
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routes;
