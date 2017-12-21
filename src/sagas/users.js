import { fetchUserRequest, fetchUserSuccess, fetchUserFailure, fetchTokenOwnerRequest } from "../actions/users";
import { takeLatest, call, put } from "redux-saga/effects";
import { getUserInformation, getTokenOwner } from "../api";
import requestFlow from './request';
  
export function* fetchUserSaga(action) {
  try {
    let userData;
    if (fetchTokenOwnerRequest.toString() === action.type) {
      userData = yield call(requestFlow, getTokenOwner, action.payload);
    } else {
      userData = yield call(requestFlow, getUserInformation, action.payload);
    }
    yield put(fetchUserSuccess(userData));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}
  
export function* fetchUserWatch() {
  yield takeLatest([fetchUserRequest, fetchTokenOwnerRequest], fetchUserSaga);
}