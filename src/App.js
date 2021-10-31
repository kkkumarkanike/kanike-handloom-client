import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AdminHome from "./screens/admin/Home";
import UserHome from "./screens/user/Home";
import AdminNav from "./components/Navigation/AdminNav";
import AdminSignup from "./components/Signup/AdminSignup";
import AdminLogin from "./components/Login/AdminLogin";
import UserNav from "./components/Navigation/UserNav";
import UserSignup from "./components/Signup/UserSignup";
import UserLogin from "./components/Login/UserLogin";
import Products from "./screens/admin/Products";
import Users from "./screens/admin/Users";

function App() {
  return (
    <BrowserRouter>
      {true ? (
        // Admin Routes
        <div>
          <AdminNav />
          {true ? (
            <div className="p-5">
              <Switch>
                <Route path="/admin" exact component={AdminHome} />
                <Route path="/admin/products" exact component={Products} />
                <Route path="/admin/users" exact component={Users} />
              </Switch>
            </div>
          ) : (
            <Switch>
              <Route path="/admin" exact component={AdminLogin} />
              <Route path="/admin/signup" exact component={AdminSignup} />
              <Route path="/admin/login" exact component={AdminLogin} />
              <Redirect to="/admin/login" />
            </Switch>
          )}
        </div>
      ) : (
        <div>
          <UserNav />
          <Switch>
            <Route path="/" exact component={UserHome} />
            <Route path="/signup" exact component={UserSignup} />
            <Route path="/login" exact component={UserLogin} />
          </Switch>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
