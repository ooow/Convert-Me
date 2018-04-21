import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import currencies from '../date/currencies';
import ListItem from '../components/list/ListItem';
import Separator from '../components/list/Separator';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  handlePress = () => {
    console.log('Row press');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          translucent={false}
        />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
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
