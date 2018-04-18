import EStyleSheet from 'react-native-extended-stylesheet';

const style = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 11,
    width: 19,
  },
  text: {
    color: '$white',
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 20,
  },
});

export default style;
