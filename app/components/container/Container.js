import React from 'react';
import { SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Container = ({ children, backgroundColor }) => {
  const containerStyles = [style.container];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }
  return <SafeAreaView style={containerStyles}>{children}</SafeAreaView>;
};

Container.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.any,
};

export default Container;
