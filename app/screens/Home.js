import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import ButtonWithInput from '../components/textinput/ButtonWithInput';
import Container from '../components/container/Container';
import Header from '../components/header/Header';
import LastConverted from '../components/lastconverted/LastConverted';
import Logo from '../components/logo/Logo';
import ReverseButton from '../components/reversebutton/ReverseButton';
import {
  changeCurrencyAmount,
  swapCurrency,
} from '../redux/actions/currencies';

class Home extends Component {
  static propTypes = {
    amount: PropTypes.number,
    baseCurrency: PropTypes.string,
    conversionRate: PropTypes.number,
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool,
    lastConversionDate: PropTypes.object,
    navigation: PropTypes.object,
    quoteCurrency: PropTypes.string,
  };

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
    });
  };

  handleChangeAmount = (amount) => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };

  handleReverseCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  handleSettings = () => {
    this.props.navigation.navigate('Options');
  };

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);

    if (this.props.isFetching) {
      quotePrice = '...';
    }

    return (
      <Container>
        <StatusBar
          barStyle="light-content"
          translucent={false}
        />
        <Header onPress={this.handleSettings} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <ButtonWithInput
            buttonText={this.props.baseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeAmount}
            onPress={this.handlePressBaseCurrency}
          />
          <ButtonWithInput
            buttonText={this.props.quoteCurrency}
            editable={false}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConversionDate}
            conversionRate={this.props.conversionRate.toString()}
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

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const amount = state.currencies.amount;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const isFetching = conversionSelector.isFetching;

  return {
    baseCurrency,
    quoteCurrency,
    amount,
    isFetching,
    lastConversionDate: conversionSelector.date || new Date(),
    conversionRate: rates[quoteCurrency] || 0,
  };
};

export default connect(mapStateToProps)(Home);
