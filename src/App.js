import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import QueryBot from "./pages/Querybot";
import ShopBot from "./pages/Shopbot";
import Visualy from "./pages/Visualy";
import Predicto from "./pages/Predicto";
import Dashboard from "./pages/Dashboard";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/home" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/shopbot" component={ShopBot} />
          <Route exact path="/querybot" component={QueryBot} />
          <Route exact path="/visualy" component={Visualy} />
          <Route exact path="/predicto" component={Predicto} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
         
        </Main>
      </Switch>
    </div>
  );
}

export default App;
