import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import ButtonWithInput from '../components/textinput/ButtonWithInput';
import Container from '../components/container/Container';
import Header from '../components/header/Header';
import LastConverted from '../components/lastconverted/LastConverted';
import Logo from '../components/logo/Logo';
import ReverseButton from '../components/reversebutton/ReverseButton';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'EUR';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '80.78';
const TEMP_CONVERSION_RATE = '0.807871';
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePressBaseCurrency = () => {
    console.log('Press base currency');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressQuoteCurrency = () => {
    console.log('Press quote currency');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  handleTextChange = (text) => {
    console.log('Text changed: ', text);
  };

  handleReverseCurrency = () => {
    console.log('Revert Currency');
  };

  handleSettings = () => {
    console.log('Settings');
  };

  render() {
    return (
      <Container>
        <StatusBar
          barStyle="light-content"
          translucent={false}
        />
        <Header onPress={this.handleSettings()} />
        <KeyboardAvoidingView behavior="padding">
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
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ReverseButton
            onPress={this.handleReverseCurrency}
            text="Reverse Currency"
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
