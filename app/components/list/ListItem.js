import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';
import style from './style';

const ListItem =
  ({ text, onPress, selected = false, checkMark = true, visible = true }) => (
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
      </View>
    </TouchableHighlight>
  );

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  checkMark: PropTypes.bool,
  visible: PropTypes.bool,
};

export default ListItem;
