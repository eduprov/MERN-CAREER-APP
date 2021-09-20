import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  adminLoginReducer,
  adminRegisterReducer,
} from "./reducers/adminReducer";
import { interviewsListReducer } from "./reducers/interviewlistReducer";
import {
  interviewCreateReducer,
  interviewListReducer,
} from "./reducers/interviewReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  // this will contain our reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  interviewList: interviewListReducer,
  interviewCreate: interviewCreateReducer,
  userUpdate: userUpdateReducer,
  adminLogin: adminLoginReducer,
  adminRegister: adminRegisterReducer,
  interviewsList: interviewsListReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initalState = {
  userLogin: { userInfo: userInfoFromStorage },
  adminLogin: { adminInfo: adminInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
