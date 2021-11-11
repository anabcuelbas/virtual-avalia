import React from "react";
import { Switch, Route } from "react-router-dom";
import { AdminLogin } from "../modules/admin/adminLogin";
import { CreateQuestion } from "../modules/admin/createQuestion";
import { QuestionsDatabase } from "../modules/admin/questionsDatabase";
import { TestsDatabase } from "../modules/admin/testsDatabase";
import { GenerateTests } from "../modules/admin/generateTests";
import { HomeScreen } from "../modules/homePage";
import { StudentLogin } from "../modules/student/studentLogin";
import { WelcomeAdmin } from "../modules/admin/welcomeAdmin";
import { GradesDatabase } from "../modules/admin/gradesDatabase/GradesDatabase.page";
import { StudentTestAttempt } from "../modules/student/studentTestAttempt/";
import { ViewSubmission } from "../modules/admin/viewSubmission";
import { ScheduleTests } from "../modules/admin/scheduleTests";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/admin-login" component={AdminLogin} />
      <Route path="/welcome-admin" component={WelcomeAdmin} />
      <Route path="/admin-questions" component={QuestionsDatabase} />
      <Route path="/admin-tests" component={TestsDatabase} />
      <Route path="/admin-generate-tests" component={GenerateTests} />
      <Route path="/admin-create-question" component={CreateQuestion} />
      <Route path="/admin-grades" component={GradesDatabase} />
      <Route path="/admin-view-submission" component={ViewSubmission} />
      <Route path="/admin-schedule" component={ScheduleTests} />
      <Route path="/student-login" component={StudentLogin} />
      <Route path="/student-test-attempt" component={StudentTestAttempt} />
    </Switch >
  );
};
