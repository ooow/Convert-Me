import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Container = ({ children, backgroundColor }) => {
  const containerStyle = [style.container];
  if (backgroundColor) {
    containerStyle.push({ backgroundColor });
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyle}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.any,
};

export default Container;
