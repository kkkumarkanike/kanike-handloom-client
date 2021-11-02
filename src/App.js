import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { storeAdminDataFromLocalStorage } from "./store/actions/adminAuthActions";

function App() {
  const { admin } = useSelector((state) => state.adminAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    const storageAdmin = localStorage.getItem("admin");
    if (!admin) {
      if (storageAdmin) {
        dispatch(storeAdminDataFromLocalStorage(JSON.parse(storageAdmin)));
      }
    }
  }, []);
  return (
    <BrowserRouter>
      <AdminNav />
      {admin ? (
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
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;

{
  /* <div>
  <UserNav />
  <Switch>
    <Route path="/" exact component={UserHome} />
    <Route path="/signup" exact component={UserSignup} />
    <Route path="/login" exact component={UserLogin} />
  </Switch>
</div>; */
}
