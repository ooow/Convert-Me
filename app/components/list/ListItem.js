import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';
import style from './style';

const ListItem =
  ({ text, onPress, selected = false, checkMark = true, visible = true, customIcon = null }) => (
    <TouchableHighlight
      onPress={onPress}
      underlay={style.$underLineColor}
    >
      <View style={style.row}>
        <Text style={style.text}>{text}</Text>
        {
          selected ?
            <Icon
              checkMark={checkMark}
              visible={visible}
            />
            :
            <Icon />
        }
        {customIcon}
      </View>
    </TouchableHighlight>
  );

ListItem.propTypes = {
  checkMark: PropTypes.bool,
  customIcon: PropTypes.element,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string,
  visible: PropTypes.bool,
};

export default ListItem;
