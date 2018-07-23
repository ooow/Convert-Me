import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/router';
import AlertProvider from './components/alert/AlertProvider';

EStyleSheet.build({
  $border: '#E2E2E2',
  $darkText: '#343434',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $primaryBlue: '#4F6D7A',
  $primaryGreen: '#00BD9D',
  $primaryOrange: '#D57A66',
  $primaryPurple: '#9E769F',
  $white: '#FFF',
// $outline: 1,
});

const App = () => (
  <AlertProvider>
    <Navigator />
  </AlertProvider>
);

export default App;
