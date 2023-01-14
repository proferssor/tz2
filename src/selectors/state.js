import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pointsReducer from "../reducers/PointsSlice";
import { rootSagas } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  pointsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);
