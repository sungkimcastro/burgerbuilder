import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BurgerHandler from "./components/BurgerHandler";
import Checkout from "./containers/Checkout";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={BurgerHandler} />
      <Route path="/checkout" component={Checkout} />
      <Redirect to="/" exact />
    </Switch>
  );
}

export default App;
