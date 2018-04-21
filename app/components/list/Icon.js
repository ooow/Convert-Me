import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Icon = ({ checkMark = false, visible = false }) => {
  const iconStyle = [style.icon];
  if (visible) {
    iconStyle.push(style.iconVisible);
  }

  return (
    <View style={iconStyle}>
      {
        checkMark ?
          <Image
            style={style.checkIcon}
            source={require('./img/check.png')}
            resizeMode="contain"
          />
          :
          null
      }
    </View>
  );
};

Icon.propTypes = {
  checkMark: PropTypes.bool,
  visible: PropTypes.bool,
};

export default Icon;
