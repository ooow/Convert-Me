import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const style = EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,
  container: {
    alignItems: 'center',
    backgroundColor: '$white',
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    height: INPUT_HEIGHT,
    marginVertical: 11,
    width: '90%',
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '$white',
    borderBottomLeftRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
    height: INPUT_HEIGHT,
    justifyContent: 'center',
  },
  buttonText: {
    color: '$primaryBlue',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 16,
  },
  input: {
    borderTopRightRadius: BORDER_RADIUS,
    color: '$inputText',
    flex: 1,
    fontSize: 18,
    height: INPUT_HEIGHT,
    paddingHorizontal: 8,
  },
  separator: {
    backgroundColor: '$border',
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
  },
});

export default style;
