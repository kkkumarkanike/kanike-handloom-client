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
import { storeUserDataFromLocalStorage } from "./store/actions/userAuthActions";
import Cart from "./screens/user/Cart";
import Favorites from "./screens/user/Favorites";
// import { storeAdminDataFromLocalStorage } from "./store/actions/adminAuthActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { admin } = useSelector((state) => state.adminAuth);
  const { user } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    // const storageAdmin = localStorage.getItem("admin");
    const storageUser = localStorage.getItem("user");
    if (!user) {
      if (storageUser) {
        dispatch(storeUserDataFromLocalStorage(JSON.parse(storageUser)));
      }
    }
  }, []);
  return (
    <BrowserRouter>
      {/* Admin Routes */}
      {/* <AdminNav />
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
      )} */}

      {/* User Routes */}
      <UserNav />
      {user ? (
        <div className="p-5">
          <Switch>
            <Route path="/" exact component={UserHome} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/favorites" exact component={Favorites} />
          </Switch>
        </div>
      ) : (
        <Switch>
          <Route path="/" exact component={UserHome} />
          <Route path="/signup" exact component={UserSignup} />
          <Route path="/login" exact component={UserLogin} />
        </Switch>
      )}
      <ToastContainer />
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
