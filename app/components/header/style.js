import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 30,
    },
  },
  button: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 5,
    flex: 1,
  },
  buttonRight: {
    alignItems: 'flex-end',
  },
  icon: {
    width: 18,
  },
});

export default style;
