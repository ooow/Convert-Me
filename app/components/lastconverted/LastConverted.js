import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import style from './style';

const LastConverted = ({ base, quote, conversionRate, date }) => (
  <Text style={style.smallText}>
    1 {base} = {conversionRate} {quote} as
    of {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = {
  base: PropTypes.string,
  conversionRate: PropTypes.number,
  date: PropTypes.object,
  quote: PropTypes.string,
};


export default LastConverted;
