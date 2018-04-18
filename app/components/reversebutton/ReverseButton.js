import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const ReverseButton = ({ text, onPress }) => (
  <TouchableOpacity
    style={style.container}
    onPress={onPress}
  >
    <View style={style.wrapper}>
      <Image
        resizeMode="contain"
        source={require('./img/icon.png')}
        style={style.icon}
      />
      <Text style={style.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ReverseButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default ReverseButton;
