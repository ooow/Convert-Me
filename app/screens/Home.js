import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import ButtonWithInput from '../components/textinput/ButtonWithInput';
import Container from '../components/container/Container';
import Logo from '../components/logo/Logo';
import ReverseButton from '../components/reversebutton/ReverseButton';
import LastConverted from '../components/lastconverted/LastConverted';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'EUR';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '80.78';
const TEMP_CONVERSION_RATE = '0.807871';
const TEMP_CONVERSION_DATE = new Date();

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

  handleReverseCurrency = () => {
    console.log('Revert Currency');
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
      </Container>
    );
  }
}

export default Home;
