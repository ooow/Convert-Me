import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import ButtonWithInput from '../components/textinput/ButtonWithInput';
import Container from '../components/container/Container';
import Logo from '../components/logo/Logo';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'EU   ';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '140';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('Press base currency');
  };

  handlePressQuoteCurrency = () => {
    console.log('Press quote currency');
  };

  handleTextChange = (text) => {
    console.log('Text changed: ', text);
  };

  render() {
    return (
      <Container>
        <StatusBar
          barStyle="light-content"
          translucent={false}
        />
        <Logo />
        <ButtonWithInput
          buttonText={TEMP_BASE_CURRENCY}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
          onPress={this.handlePressBaseCurrency}
        />
        <ButtonWithInput
          buttonText={TEMP_QUOTE_CURRENCY}
          editable={false}
          onPress={this.handlePressQuoteCurrency}
          value={TEMP_QUOTE_PRICE}
        />
      </Container>
    );
  }
}

export default Home;
