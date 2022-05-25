import React from "react";
import { Route, Switch } from "react-router-dom";
import Filter from "./common/Filter";
import Header from "./common/Header";
import Configuration from "./configuration/Configuration";
import NewFile from "./configuration/NewFile";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login";
import Orders from "./orders/Orders";

function App() {
  return (
    <>
      <Login />
      {/* <Header />
      <Filter />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/order">
          <Orders />
        </Route>
        <Route path="/configuration">
          <Configuration />
        </Route>
      </Switch> */}
    </>
  );
}

export default App;
