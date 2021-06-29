import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { Fixdeposit } from "../Pages/FixDeposit/FixDeposit";
import { Login } from "../Pages/Login/Login";
import { RecDeposit } from "../Pages/RecDeposit/RecDeposit";
import { Register } from "../Pages/Register/Register";

export function Routes() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/fdportfolio">
          <Fixdeposit />
        </Route>
        <Route exact path="/rdportfolio">
          <RecDeposit />
        </Route>
      </Switch>
    </>
  );
}
