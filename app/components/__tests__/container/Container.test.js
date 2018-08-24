import React from 'react';
import renderer from 'react-test-renderer';

import Container from '../../container/Container';
import style from '../../container/style';

it('exports a style object', () => {
  expect(typeof  style).toBe('object');
});

it('renders successfully without children', () => {
  const underTest = renderer.create(<Container />).toJSON();
  expect(underTest).toBeTruthy();
});

