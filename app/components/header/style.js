import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  container: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 20,
    },
  },
  button: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  icon: {
    width: 18,
  },
});

export default style;
