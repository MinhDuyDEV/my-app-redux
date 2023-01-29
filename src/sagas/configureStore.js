import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { reducer } from "./reducers";
// import createSagaMiddleware from "@redux-saga/core";
// import rootSaga from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
  // middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

// sagaMiddleware.run(rootSaga);

export default store;
