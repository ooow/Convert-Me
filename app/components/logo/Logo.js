import React, { Component } from 'react';
import {
  Animated, ImageBackground, Keyboard, Platform, Text,
  View,
} from 'react-native';
import style from './style';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(style.$largeContainerSize);
    this.imageWidth = new Animated.Value(style.$largeImageSize);
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: style.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: style.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: style.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: style.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      style.containerLogo,
      {
        width: this.containerImageWidth,
        height: this.containerImageWidth,
      },
    ];
    const imageStyle = [
      style.logo,
      {
        width: this.imageWidth,
        height: this.imageWidth,
      },
    ];

    return (
      <View style={style.container}>
        <Animated.View style={containerImageStyle}>
          <ImageBackground
            resizeMode="contain"
            style={style.backgroundImage}
            source={require('./img/background.png')}
          >
            <Animated.Image
              resizeMode="contain"
              style={imageStyle}
              source={require('./img/logo.png')}
            />
          </ImageBackground>
        </Animated.View>
        <Text style={style.title}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
