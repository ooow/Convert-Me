import React, { Component } from 'react';
import { Platform, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListItem from '../components/list/ListItem';
import Separator from '../components/list/Separator';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'android';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handleThemePress = () => {
    console.log('Theme press');
  };

  handleSitePress = () => {
    console.log('Site press');
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <StatusBar
          barStyle="default"
          translucent={false}
        />
        <ListItem
          text="Thems"
          onPress={this.handleThemePress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem
          text="Goga.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Options;
