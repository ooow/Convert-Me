import { runSaga } from 'redux-saga';
import { initialState as currenciesInitialState } from '../../redux/reducers/currencies';
import { initialState as networkInitialState } from '../../redux/reducers/network';
import { initializeState } from '../sagas';

beforeEach(() => {
  fetch.resetMocks();
});

it('sets the conversion result on successful response', async () => {
  const initialState = {
    currencies: currenciesInitialState,
    network: networkInitialState,
  };
  const expectedResult = {
    base: 'USD',
    date: '2018-05-22',
    rates: { AUD: 1.5543 },
  };
  fetch.mockResponseOnce(JSON.stringify(expectedResult));

  const dispatched = [];
  await runSaga(
    {
      dispatch: action => dispatched.push(action),
      getState: () => (initialState),
    },
    initializeState,
    { currency: 'USD' },
  ).done;

  expect(dispatched).toEqual([{
    type: 'CONVERSION_RESULT',
    result: expectedResult,
  }]);
  expect(fetch).toHaveBeenCalled();
});
