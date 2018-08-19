import { call, put, select, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  CHANGE_BASE_CURRENCY,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
} from '../redux/actions/currencies';


const requestTimeout = (time, promise) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => reject(new Error('Request has timed out - you have a slow internet connection')),
      time,
    );
    promise.then(resolve, reject);
  });

const getLatestRate = currency =>
  requestTimeout(2000, fetch(`https://frankfurter.app//current?from=${currency}`));

function* initializeState(action) {
  const { connected, hasCheckedStatus } = yield select(state => state.network);

  if (!connected && hasCheckedStatus) {
    yield put({
      type: CONVERSION_ERROR,
      error: 'Not connected to the internet. Conversion rate may be ' +
      'outdated or unavailable',
    });
    return;
  }

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
    yield put({
      type: CONVERSION_ERROR,
      error: 'Not connected to the internet. Conversion rate may be ' +
      'outdated or unavailable',
    });
  }
}

function* cleanConversionError() {
  const DELAY_SECONDS = 4;
  const error = yield select(state => state.currencies.error);

  if (error) {
    yield delay(DELAY_SECONDS * 1000);
    yield put({ type: CONVERSION_ERROR, error: null });
  }
}

export function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, initializeState);
  yield takeEvery(SWAP_CURRENCY, initializeState);
  yield takeEvery(CHANGE_BASE_CURRENCY, initializeState);
  yield takeEvery(CONVERSION_ERROR, cleanConversionError);
}
