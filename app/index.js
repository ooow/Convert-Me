import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $primaryBlue: '#4F6D7A',
  $white: '#FFF',
  $darkText: '#343434',
// $outline: 1,
});

const App = () => (
  <CurrencyList />
);

export default App;
