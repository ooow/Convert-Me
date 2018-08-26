import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import Container from '../../container/Container';
import style from '../../container/style';

it('exports a style object', () => {
  expect(typeof  style).toBe('object');
});

it('renders successfully without children', () => {
  const underTest = renderer.create(<Container />).toJSON();
  expect(underTest).toBeTruthy();
});

it('renders children props', () => {
  const rendered = renderer
    .create(<Container>
      <View />
    </Container>)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});

it('uses the specified backgroundColor if provided', () => {
  const rendered = renderer.create(
    <Container backgroundColor="red" />).toJSON();
  expect(rendered).toMatchSnapshot();
});
