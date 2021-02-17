import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Booking from "./pages/Booking";

function App() {
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

export default App;
