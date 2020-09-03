import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./hoc/Layout";
import Auth from "./hoc/Auth";
import Home from "./components/Home/Home";
import BookView from "./components/Books/Books";
import User from "./components/Admin/Admin";
import Login from "./containers/Admin/Login";
import Register from "./containers/Admin/Register";
import AddReview from "./containers/Admin/Add";
import EditReview from "./containers/Admin/Edit";
import UserPosts from "./components/Admin/UserPosts";
import Logout from "./components/Admin/Logout";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/editPost/:id" component={Auth(EditReview, true)} />
        <Route path="/books/:id" component={Auth(BookView)} />
        <Route path="/user/userReviews" component={Auth(UserPosts, true)} />
        <Route path="/user/logout" component={Auth(Logout, true)} />
        <Route path="/user/register" component={Auth(Register, true)} />
        <Route path="/user/add" component={Auth(AddReview, true)} />
        <Route path="/user" component={Auth(User, true)} />
        <Route path="/login" component={Auth(Login, false)} />
        <Route path="/" exact component={Auth(Home, null)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
