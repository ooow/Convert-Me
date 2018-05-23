import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Icon = ({ checkMark = false, visible = false, iconBackground = null }) => {
  const iconStyle = [style.icon];
  if (visible) {
    iconStyle.push(style.iconVisible);
  }

  if (iconBackground) {
    iconStyle.push({ backgroundColor: iconBackground });
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
  iconBackground: PropTypes.string,
  visible: PropTypes.bool,
};

export default Icon;
