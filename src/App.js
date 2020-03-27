import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";
import { AUTH_STATE_CHECK } from "./store/action/auth";
import BurgerHandler from "./components/BurgerHandler";
import Checkout from "./components/Checkout";
import Auth from "./components/Auth";
import Orders from "./components/Orders";
import NavBar from "./components/NavBar";

function App(props) {
  useEffect(() => {
    props.autoSign();
  });

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={BurgerHandler} />
    </Switch>
  );

  if (props.token) {
    routes = (
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={BurgerHandler} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <React.Fragment>
      <NavBar />
      {routes}
    </React.Fragment>
  );
}

const mapState = ({ auth: { token } }) => {
  return {
    token
  };
};

const mapDispatch = dispatch => {
  return {
    autoSign: () => dispatch(AUTH_STATE_CHECK())
  };
};

export default connect(mapState, mapDispatch)(App);
