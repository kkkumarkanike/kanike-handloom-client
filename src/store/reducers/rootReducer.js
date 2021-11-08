import { combineReducers } from "redux";
import adminAuthReducer from "./adminAuthReducer";
import userAuthReducer from "./userAuthReducer";
import cartNfavReducer from "./cartnFavReducer";

export const rootReducer = combineReducers({
  adminAuth: adminAuthReducer,
  userAuth: userAuthReducer,
  cartnFav: cartNfavReducer,
});
