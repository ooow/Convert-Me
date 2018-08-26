import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import CurrencyList from '../../CurrencyList';
import { initialState as themeInitialState } from '../../../redux/reducers/theme';
import { initialState as currenciesInitialState } from '../../../redux/reducers/currencies';

const mockStore = configureStore([]);

it('successful renders', () => {
  const navigation = { state: { params: { type: 'quote' } } };
  const initialState = {
    currencies: currenciesInitialState,
    theme: themeInitialState,
  };
  const rendered = shallow(<CurrencyList navigation={navigation} />, {
    context: { store: mockStore(initialState) },
  });
  expect(rendered.dive()).toMatchSnapshot();
});
