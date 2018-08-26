import { changeCurrencyAmount, getInitialConversion } from '../currencies';

describe('getInitialConversion', () => {
  expect(getInitialConversion()).toMatchSnapshot();
});

describe('changeCurrencyAmount', () => {
  it('creates an action with an amount of 100', () => {
    expect(changeCurrencyAmount(100)).toMatchSnapshot();
  });

  it('converts a string value to a float', () => {
    expect(changeCurrencyAmount('100')).toMatchSnapshot();
  });
});
