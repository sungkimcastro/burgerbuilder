import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import { AUTH_STATE_CHECK } from "./store/action/auth";
import PublicRoute from "./routes/Public";
import PrivateRoute from "./routes/Private";
import BurgerHandler from "./components/BurgerHandler";
import Checkout from "./components/Checkout";
import Auth from "./components/Auth";
import NavBar from "./components/NavBar";

function App(props) {
  useEffect(() => {
    props.autoSign();
  });

  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <PublicRoute path="/" component={BurgerHandler} exact />
        <PublicRoute path="/auth" component={Auth} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <Redirect to="/" exact />
      </Switch>
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
