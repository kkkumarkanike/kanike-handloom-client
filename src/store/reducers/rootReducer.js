import { combineReducers } from "redux";
import adminAuthReducer from "./adminAuthReducer";
import userAuthReducer from "./userAuthReducer";

export const rootReducer = combineReducers({
  adminAuth: adminAuthReducer,
  userAuth: userAuthReducer,
});
