import React from "react";
import { Switch, Route } from "react-router-dom";
import BurgerHandler from "./components/BurgerHandler";
import Order from "./containers/Order";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={BurgerHandler} />
      <Route path="/order" exact component={Order} />
    </Switch>
  );
}

export default App;
