import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';
import style from './style';

const ListItem = props => (
  <TouchableHighlight
    onPress={props.onPress}
    underlay={style.$underLineColor}
  >
    <View style={style.row}>
      <Text style={style.text}>{props.text}</Text>
      {
        props.selected ?
          <Icon
            visible
            iconName={props.checkMark ? 'checkmark' : null}
            iconBackground={props.iconBackground}
          />
          :
          <Icon />
      }
      {props.customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  checkMark: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string,
};

export default ListItem;
