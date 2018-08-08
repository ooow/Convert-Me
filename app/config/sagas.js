import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  CHANGE_BASE_CURRENCY,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
} from '../redux/actions/currencies';


const getLatestRate = currency =>
  fetch(`https://frankfurter.app//current?from=${currency}`);

function* initializeState(action) {
  try {
    let currency = action.currency;

    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }

    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
}

export function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, initializeState);
  yield takeEvery(SWAP_CURRENCY, initializeState);
  yield takeEvery(CHANGE_BASE_CURRENCY, initializeState);
}
