import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
<<<<<<< HEAD
import Footer from "./components/Footer";
=======
>>>>>>> 250a947430761e18d559cf70afc91696098ba0a2

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
