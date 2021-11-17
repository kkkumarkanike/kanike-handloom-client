import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Products from "./screens/admin/Products";
// import Users from "./screens/admin/Users";
// import AdminNav from "./components/Navigation/AdminNav";
// import AdminSignup from "./components/Signup/AdminSignup";
// import AdminLogin from "./components/Login/AdminLogin";
// import AdminHome from "./screens/admin/Home";
// import { storeAdminDataFromLocalStorage } from "./store/actions/adminAuthActions";
import { useDispatch, useSelector } from "react-redux";
import UserHome from "./screens/user/Home";
import UserNav from "./components/Navigation/UserNav";
import UserSignup from "./components/Signup/UserSignup";
import UserLogin from "./components/Login/UserLogin";
import { storeUserDataFromLocalStorage } from "./store/actions/userAuthActions";
import Cart from "./screens/user/Cart";
import Favorites from "./screens/user/Favorites";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAllSarees,
  getCartSarees,
  getFavoriteSarees,
  getOrders,
} from "./store/actions/cartnFavActions";
import ForgotPassword from "./components/Login/ForgotPassword";
import ResetPassword from "./components/Login/ResetPassword";
import Profile from "./screens/user/Profile";
import Orders from "./screens/user/Orders";

function App() {
  // const { admin } = useSelector((state) => state.adminAuth);
  const { user } = useSelector((state) => state.userAuth);
  const { cart, favorites, orders } = useSelector((state) => state.cartnFav);
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
  useEffect(() => {
    if (user && !cart && !favorites && !orders) {
      dispatch(getAllSarees());
      dispatch(getCartSarees(user._id));
      dispatch(getFavoriteSarees(user._id));
      dispatch(getOrders(user._id));
    }
  }, [user]);
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
            <Route path="/orders" exact component={Orders} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </div>
      ) : (
        <Switch>
          <Route path="/" exact component={UserHome} />
          <Route path="/signup" exact component={UserSignup} />
          <Route path="/login" exact component={UserLogin} />
          <Route path="/reset-password" exact component={ForgotPassword} />
          <Route
            path="/user/reset-password/:id"
            exact
            component={ResetPassword}
          />
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
