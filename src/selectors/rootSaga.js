import { all } from "redux-saga/effects";
import pointsSagas from "../sagas/sagas";

export function* rootSagas() {
   yield all([...pointsSagas]);
}
