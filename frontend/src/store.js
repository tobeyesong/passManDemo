/** @format */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  passwordListReducer,
  passwordCreateReducer,
  passwordDetailsReducer,
  passwordDeleteReducer,
  passwordUpdateReducer,
} from "./reducers/passwordReducers";

const reducer = combineReducers({
  passwordList: passwordListReducer,
  passwordCreate: passwordCreateReducer,
  passwordDetails: passwordDetailsReducer,
  passwordDelete: passwordDeleteReducer,
  passwordUpdate: passwordUpdateReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
