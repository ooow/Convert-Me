import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={style.container}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
