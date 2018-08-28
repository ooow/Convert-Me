import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';

import style from './style';

class Icon extends Component {
  static propTypes = {
    iconBackground: PropTypes.string,
    iconColor: PropTypes.string,
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    visible: PropTypes.bool,
  };

  getIcon = (name) => {
    switch (name) {
      case 'arrow-forward':
        return require('./img/arrow-forward/arrow-forward.png');
      case 'link':
        return require('./img/link/link.png');
      case 'checkmark':
        return require('./img/checkmark/checkmark.png');
      default:
        return null;
    }
  };

  render() {
    if (this.props.visible) {
      const iconStyle = [style.icon];
      if (this.props.visible) {
        iconStyle.push(style.iconVisible);
      }

      if (this.props.iconBackground) {
        iconStyle.push({ backgroundColor: this.props.iconBackground });
      }

      const iconStyles = [style.checkIcon];
      if (this.props.iconColor) {
        iconStyles.push({ tintColor: this.props.iconColor });
      }

      if (this.props.iconSize) {
        iconStyles.push({ width: this.props.iconSize });
      }

      return (
        <View style={iconStyle}>
          {this.props.iconName ? (
            <Image
              source={this.getIcon(this.props.iconName)}
              style={iconStyles}
              resizeMode="contain"
            />
          ) : null}
        </View>
      );
    }

    return <View style={style.icon} />;
  }
}

export default Icon;
