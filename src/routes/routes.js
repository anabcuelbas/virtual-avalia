import React from "react";
import { Switch, Route } from "react-router-dom";
import { AdminLogin } from "../modules/admin/adminLogin";
import { CreateQuestion } from "../modules/admin/createQuestion";
import { QuestionsDatabase } from "../modules/admin/questionsDatabase";
import { TestsDatabase } from "../modules/admin/testsDatabase";
import { HomeScreen } from "../modules/homePage";
import { StudentLogin } from "../modules/student/studentLogin";
import { WelcomeAdmin } from "../modules/admin/welcomeAdmin";
import { GradesDatabase } from "../modules/admin/gradesDatabase/GradesDatabase.page";
import StudentTestAttempt from "../modules/student/studentTestAttempt/StudentTestAttempt.page";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/admin-login" component={AdminLogin} />
      <Route path="/admin-questions" component={QuestionsDatabase} />
      <Route path="/admin-tests" component={TestsDatabase} />
      <Route path="/admin-create-question" component={CreateQuestion} />
      <Route path="/admin-grades" component={GradesDatabase} />
      <Route path="/student-login" component={StudentLogin} />
      <Route path="/student-test-attempt" component={StudentTestAttempt} />
      <Route path="/welcome-admin" component={WelcomeAdmin} />
    </Switch>
  );
};
