import React from "react";
import { Switch, Route } from "react-router-dom";
import { AdminLogin } from "../modules/admin/admin-login";
import { HomeScreen } from "../modules/home-page";
import { StudentLogin } from "../modules/student/student-login";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/admin-login" component={AdminLogin} />
      <Route path="/student-login" component={StudentLogin} />
    </Switch>
  );
};