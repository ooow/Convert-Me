import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, StatusBar, View } from 'react-native';
import currencies from '../date/currencies';
import ListItem from '../components/list/ListItem';
import Separator from '../components/list/Separator';
import {
  changeBaseCurrency,
  changeQuoteCurrency,
} from '../redux/actions/currencies';

class CurrencyList extends Component {
  static propTypes = {
    baseCurrency: PropTypes.string,
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
    primaryColor: PropTypes.string,
    quoteCurrency: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.type = props.navigation.state.params.type;
  }

  handlePress = (currency) => {
    if (this.type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (this.type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }
    this.props.navigation.goBack(null);
  };

  render() {
    let currentCurrency = 'CAD';
    if (this.type === 'base') {
      currentCurrency = this.props.baseCurrency;
    } else if (this.type === 'quote') {
      currentCurrency = this.props.quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="default"
          translucent={false}
        />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === currentCurrency}
              visible={item === currentCurrency}
              checkMark={item === currentCurrency}
              iconBackground={this.props.primaryColor}
              onPress={() => this.handlePress(item)}
            />)}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor,
  };
};

export default connect(mapStateToProps)(CurrencyList);
