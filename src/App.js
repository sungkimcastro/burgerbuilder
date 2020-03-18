import React from "react";
import { Switch, Route } from "react-router-dom";
import Burger from "./components/Burger";
import Order from "./containers/Order";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Burger} />
      <Route path="/order" exact component={Order} />
    </Switch>
  );
}

export default App;
