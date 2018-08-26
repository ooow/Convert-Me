import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';

import ReverseButton from '../../reversebutton/ReverseButton';

it('handles a press', () => {
  const callback = jest.fn();
  const wrapper = shallow(<ReverseButton
    text="test 1"
    onPress={callback}
  />);
  expect(wrapper.find(TouchableOpacity).length).toBe(1);
});
