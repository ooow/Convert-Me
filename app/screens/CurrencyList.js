import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import currencies from '../date/currencies';
import ListItem from '../components/list/ListItem';
import Separator from '../components/list/Separator';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePress = () => {
    console.log('Row press');
    this.props.navigation.goBack(null);
  };

  render() {
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
              selected={item === TEMP_CURRENT_CURRENCY}
              visible={item === TEMP_CURRENT_CURRENCY}
              checkMark={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />)}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
