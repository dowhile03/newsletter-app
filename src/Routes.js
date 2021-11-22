import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import Hero from "./pages/Hero";
import CategoryList from "./components/Categories/CategoryList";
import Admin from "./pages/admin/Admin";
import AdminSection from "./pages/admin/AdminSection";
import AdminProtectedRoute from "./AdminProtectedRoute";
import AddNewsletter from "./pages/admin/AddNewsletter";
import AddCategory from "./pages/admin/AddCategory";
import AddTrending from "./pages/admin/AddTrending";
import EditCategory from "./components/Categories/EditCategory";
import Favourites from "./pages/Favourites/Favourites";
import NewsletterDetails from "./components/Categories/NewsletterDetails";
import FavouriteDetails from "./pages/Favourites/FavouriteDetails";
import TrendingDetails from "./components/TrendingDetails";
import SearchResultPage from "./components/Search/SearchResultPage";



const Routes = () => {
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/forgetpassword" exact component={ForgetPassword} />
    <Route path="/Admin" exact component={Admin} />
    <Route path="/newsletter/categories" exact component = {Hero} />
    <Route path="/:categoryId/:category" exact component={CategoryList}/>
    <Route path="/:categoryId/:category/:newsletterId/moredetails" exact component={NewsletterDetails}/>
    <Route path="/newsletter/categories/:userId/:newsletterId/moredetails" exact component={FavouriteDetails}/>
<Route  path="/:newsletterId/trendingdetails" exact component={TrendingDetails}/>
    <Route path="/search" exact component={SearchResultPage}/>

    
    <AuthProvider>
    
          <ProtectedRoutes path="/newsletter/categories/:uid" exact>
          <Hero/>
          </ProtectedRoutes>
          <ProtectedRoutes path="/newsletter/categories/:uid/favourites" exact>
          <Favourites/>
          </ProtectedRoutes> 
          
          <AdminProtectedRoute path="/addtrending" exact>
          <AddTrending/>
          </AdminProtectedRoute>
          
          <AdminProtectedRoute path="/:id/:cat/addnewsletter" exact >

            <AddNewsletter/>
          </AdminProtectedRoute>

          <AdminProtectedRoute path="/:id/:cat/editnewsletter">
          <EditCategory/>
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
          </AuthProvider>
          
        </Switch>
      </BrowserRouter>
      </>
  );
};

export default Routes;
