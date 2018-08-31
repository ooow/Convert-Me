import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Linking, ScrollView, StatusBar } from 'react-native';
import ListItem from '../components/list/ListItem';
import Separator from '../components/list/Separator';
import Icon from '../components/list/Icon';
import connectAlert from '../components/alert/connectAlert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handleThemePress = () => {
    this.props.navigation.navigate('Themes');
  };

  handleSitePress = () => {
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
            <Icon
              visible
              iconName="arrow-forward"
              iconSize={ICON_SIZE}
              iconColor={ICON_COLOR}
              iconBackground="transparent"
            />
          }
        />
        <Separator />
        <ListItem
          text="Goga.io"
          onPress={this.handleSitePress}
          customIcon={
            <Icon
              visible
              iconName="link"
              iconSize={ICON_SIZE}
              iconColor={ICON_COLOR}
              iconBackground="transparent"
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
