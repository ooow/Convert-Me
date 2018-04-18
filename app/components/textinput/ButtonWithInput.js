import color from 'color';
import React from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const ButtonWithInput = (props) => {
  const underlayColor = color(style.$buttonBackgroundColorBase)
    .darken(style.$buttonBackgroundColorModifier);

  const containerStyle = [style.container];
  if (props.editable === false) {
    containerStyle.push(style.containerDisabled);
  }

  return (
    <View style={style.container}>
      <TouchableHighlight
        onPress={props.onPress}
        style={style.buttonContainer}
        underlayColor={underlayColor}
      >
        <Text style={style.buttonText}>{props.buttonText}</Text>
      </TouchableHighlight>
      <View style={style.separator} />
      <TextInput
        style={style.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

ButtonWithInput.propTypes = {
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  onPress: PropTypes.func,
};

export default ButtonWithInput;
