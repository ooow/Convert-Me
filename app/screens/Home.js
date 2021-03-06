import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, NetInfo, StatusBar } from 'react-native';
import ButtonWithInput from '../components/textinput/ButtonWithInput';
import Container from '../components/container/Container';
import Header from '../components/header/Header';
import LastConverted from '../components/lastconverted/LastConverted';
import Logo from '../components/logo/Logo';
import ReverseButton from '../components/reversebutton/ReverseButton';
import connectAlert from '../components/alert/connectAlert';
import {
  changeCurrencyAmount,
  getInitialConversion,
  swapCurrency,
} from '../redux/actions/currencies';
import { changeNetworkStatus } from '../redux/actions/network';

class Home extends Component {
  static propTypes = {
    alertWithType: PropTypes.func,
    amount: PropTypes.number,
    baseCurrency: PropTypes.string,
    conversionRate: PropTypes.number,
    currencyError: PropTypes.string,
    dispatch: PropTypes.func,
    isConnected: PropTypes.bool,
    isFetching: PropTypes.bool,
    lastConversionDate: PropTypes.string,
    navigation: PropTypes.object,
    primaryColor: PropTypes.string,
    quoteCurrency: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.props.dispatch(getInitialConversion());
  }

  componentDidMount() {
    NetInfo.addEventListener('connectionChange', this.handleNetworkChange);
  }

  componentDidUpdate() {
    if (this.props.currencyError) {
      this.props.alertWithType('error', 'Error', this.props.currencyError);
    }
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleNetworkChange);
  }

  handleNetworkChange = (info) => {
    this.props.dispatch(changeNetworkStatus(info.type));
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

  handleDisconnectedPress = () => {
    this.props.alertWithType(
      'error',
      'Not connected to the internet',
      'Just a heads up that you are not connected to the internet - ' +
      'some features may not work',
    );
  };

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);

    if (this.props.isFetching) {
      quotePrice = '...';
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar
          barStyle="light-content"
          translucent={false}
        />
        <Header
          onPress={this.handleSettings}
          isConnected={this.props.isConnected}
          onDisconnectedPress={this.handleDisconnectedPress}
        />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <ButtonWithInput
            buttonText={this.props.baseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            textColor={this.props.primaryColor}
            onChangeText={this.handleChangeAmount}
            onPress={this.handlePressBaseCurrency}
          />
          <ButtonWithInput
            buttonText={this.props.quoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={this.props.primaryColor}
            onPress={this.handlePressQuoteCurrency}
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
    lastConversionDate: conversionSelector.date ||
    new Date().toISOString().substring(0, 10),
    conversionRate: rates[quoteCurrency] || 0,
    primaryColor: state.theme.primaryColor,
    currencyError: state.currencies.error,
    isConnected: state.network.connected,
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
