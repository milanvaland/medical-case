import { LinearProgress } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const LoginPage = React.lazy(() => import("./pages/auth/Login"));
const RegisterPage = React.lazy(() => import("./pages/auth/Register"));
const DashboardPage = React.lazy(() => import("./pages/dash/Dashboard"));
const NewCasePage = React.lazy(() => import("./pages/case/NewCase"));
const ProfilePage = React.lazy(() => import("./pages/auth/Profile"));

export default function AppRoutes(props: any) {
  return (
    <Router>
      <React.Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/account">
            <ProfilePage />
          </Route>
          <Route path="/today">
            <DashboardPage />
          </Route>
          <Route path="/new">
            <NewCasePage />
          </Route>
          <Route path="/records">
            <DashboardPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
}
