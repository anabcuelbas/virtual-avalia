import React from "react";
import { Switch, Route } from "react-router-dom";
import { AdminLogin } from "../modules/admin/adminLogin";
import { CreateQuestion } from "../modules/admin/createQuestion";
import { QuestionsDatabase } from "../modules/admin/questionsDatabase";
import { HomeScreen } from "../modules/homePage";
import { StudentLogin } from "../modules/student/studentLogin";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/admin-login" component={AdminLogin} />
      <Route path="/admin-questions" component={QuestionsDatabase} />
      <Route path="/admin-create-question" component={CreateQuestion} />
      <Route path="/student-login" component={StudentLogin} />
    </Switch>
  );
};
