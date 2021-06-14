import React, { Component } from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import SignIn from "./auth/sign_in";
import NewPassword from "./auth/new_password";
import EditPassword from "./auth/edit_password";
import ChangePassword from "./auth/change_password";
import Home from "./home";

import "bootstrap/dist/css/bootstrap.min.css";
import Defender from "./../helpers/defender";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !!Defender.currentUser() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Switch>
            <Route exact path="/" component={Home} />
              <Route exact path="/login" component={SignIn} />
              <Route exact path="/" component={SignIn} />
              <Route exact path="/change-password" component={ChangePassword} />
              <Route exact path="/password/reset" component={NewPassword} />
              <Route
                exact
                path="/password/edit/:resetRasswordToken"
                component={EditPassword}
              />
            </Switch>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
