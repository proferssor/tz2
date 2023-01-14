import { put, takeEvery } from "redux-saga/effects";
import { ApiServices } from "../HTTP/api";
import { getPointsSuccess, getPoints } from "../reducers/PointsSlice";

export function* getPointsSaga({ payload }) {
  try {
    const response = yield ApiServices.get(`${payload}`);
    yield put(getPointsSuccess(response));
  } catch (error) {
    yield put({ type: "GET_COORDS_FAILURE", error });
  }
}

const pointsSagas = [takeEvery(getPoints, getPointsSaga)];

export default pointsSagas;
