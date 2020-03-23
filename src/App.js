import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BurgerHandler from "./components/BurgerHandler";
import Checkout from "./components/Checkout";
import Auth from "./components/Auth";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={BurgerHandler} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/auth" component={Auth} />
      <Redirect to="/" exact />
    </Switch>
  );
}

export default App;
