import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducer from '../redux/reducers';

const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
