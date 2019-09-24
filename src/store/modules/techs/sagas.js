import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import * as Actions from "./actions";

export function* getTechs() {
  try {
    const response = yield call(api.get, "techs");
    yield put(Actions.getTechsSuccess(response.data));
  } catch (err) {
    yield put(Actions.getTechsFailure());
  }
}
