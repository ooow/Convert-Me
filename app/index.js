import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from './config/router';
import AlertProvider from './components/alert/AlertProvider';
import configureStore from './config/store';

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

class App extends Component {
  constructor(props) {
    super(props);

    const { store, persistor } = configureStore();
    this.state = {
      store,
      persistor,
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <PersistGate persistor={this.state.persistor}>
          <AlertProvider>
            <Navigator onNavigationStateChange={null} />
          </AlertProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
