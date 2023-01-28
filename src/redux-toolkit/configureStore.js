import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice, { incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});

// const loggerMiddleware = function(store) {
//   return function(next) {
//     return function(action) {
//       // your code here
//     }
//   }
// }

// MY custom middleware to logger store state
const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  action.payload = 10;
  next(action);
};

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});

store.subscribe(() => {
  console.log(`Current state: ${store.getState().counter.count}`);
});

export default store;
