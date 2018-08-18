import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Navigator from './config/router';
import AlertProvider from './components/alert/AlertProvider';
import store from './config/store';

EStyleSheet.build({
  $border: '#E2E2E2',
  $darkText: '#343434',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $primaryBlue: '#4F6D7A',
  $primaryGreen: '#00BD9D',
  $primaryOrange: '#D57A66',
  $primaryPurple: '#9E769F',
  $darkGray: '#212121',
  $white: '#FFF',
// $outline: 1,
});

const App = () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);

export default App;
