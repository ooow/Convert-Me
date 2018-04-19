import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Header = ({ onPress }) => (
  <View style={style.container}>
    <TouchableOpacity
      onPress={onPress}
      style={style.button}
    >
      <Image
        resizeMode="contain"
        source={require('./img/gear.png')}
        style={style.icon}
      />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func,
};

export default Header;
