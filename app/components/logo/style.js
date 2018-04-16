import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

const style = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  logo: {
    width: imageWidth / 2,
  },
  title: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 20,
    color: '$white',
  },
});

export default style;
