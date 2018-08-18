import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StatusBar } from 'react-native';
import ListItem from '../components/list/ListItem';
import Separator from '../components/list/Separator';
import { changePrimaryColor } from '../redux/actions/theme';

const style = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
  $gray: '$darkGray',
});

class Themes extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
  };

  handleThemePress = (color) => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar
          barStyle="default"
          translucent={false}
        />
        <ListItem
          text="Blue"
          onPress={() => this.handleThemePress(style.$blue)}
          iconBackground={style.$blue}
          checkMark={false}
          selected
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handleThemePress(style.$orange)}
          iconBackground={style.$orange}
          checkMark={false}
          selected
        />
        <ListItem
          text="Green"
          onPress={() => this.handleThemePress(style.$green)}
          iconBackground={style.$green}
          checkMark={false}
          selected
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handleThemePress(style.$purple)}
          iconBackground={style.$purple}
          checkMark={false}
          selected
        />
        <Separator />
        <ListItem
          text="Dark Gray"
          onPress={() => this.handleThemePress(style.$gray)}
          iconBackground={style.$gray}
          checkMark={false}
          selected
        />
      </ScrollView>
    );
  }
}

export default connect()(Themes);
