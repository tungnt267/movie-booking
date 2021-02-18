import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import { createAction } from "./redux/actions";
import { FETCH_CREDENTIALS } from "./redux/constants/user.constant";
import { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/booking/:idBooking" component={Booking} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
  _getCredentialsFromLocal = () => {
    const credentialsStr = localStorage.getItem("credentials");
    if (credentialsStr) {
      this.props.dispatch(
        createAction(FETCH_CREDENTIALS, JSON.parse(credentialsStr))
      );
    }
  };
  componentDidMount() {
    this._getCredentialsFromLocal();
  }
}

export default connect()(App);
