import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Header = ({ onPress, isConnected, onDisconnectedPress }) => (
  <View style={style.container}>
    {!isConnected ? (
      <TouchableOpacity
        onPress={onDisconnectedPress}
        style={style.button}
      >
        <Image
          resizeMode="contain"
          source={require('./img/disconnected.png')}
          style={style.icon}
        />
      </TouchableOpacity>
    ) : null}
    <TouchableOpacity
      onPress={onPress}
      style={[style.button, style.buttonRight]}
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
  isConnected: PropTypes.bool,
  onDisconnectedPress: PropTypes.func,
  onPress: PropTypes.func,
};

export default Header;
