import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Linking, Platform, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListItem from '../components/list/ListItem';
import Separator from '../components/list/Separator';
import connectAlert from '../components/alert/connectAlert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'android';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handleThemePress = () => {
    console.log('Theme press');
    this.props.navigation.navigate('Themes');
  };

  handleSitePress = () => {
    console.log('Site press');
    Linking.openURL('http://google.com').catch(() =>
      this.props.alertWithType('error', 'Sorry', 'Can\'t be opened now'));
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <StatusBar
          barStyle="default"
          translucent={false}
        />
        <ListItem
          text="Themes"
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

export default connectAlert(Options);
