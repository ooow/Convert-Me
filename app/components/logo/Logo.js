import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import style from './style';

const Logo = () => (
  <View style={style.container}>
    <ImageBackground
      resizeMode="contain"
      style={style.containerLogo}
      source={require('./img/background.png')}
    >
      <Image
        resizeMode="contain"
        style={style.logo}
        source={require('./img/logo.png')}
      />
    </ImageBackground>
    <Text style={style.title}>Currency Converter</Text>
  </View>
);

export default Logo;
