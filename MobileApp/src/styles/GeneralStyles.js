import {StyleSheet} from 'react-native';
import {colorTheme} from './ColorTheme.js';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_white: {
    backgroundColor: colorTheme.whiteShade,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_black: {
    backgroundColor: colorTheme.blackShade,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_23_white: {
    fontSize: 20,
    color: colorTheme.whiteShade,
  },
  text_23_black: {
    fontSize: 20,
    color: colorTheme.blackShade,
  },
  text_30_white: {
    fontSize: 30,
    color: colorTheme.whiteShade,
  },
  text_30_black: {
    fontSize: 30,
    color: colorTheme.blackShade,
  },
  text_50_white_bold: {
    fontSize: 50,
    color: colorTheme.whiteShade,
    fontWeight: 'bold',
  },
  text_25_white_bold: {
    fontSize: 25,
    color: colorTheme.whiteShade,
    fontWeight: 'bold',
  },
  text_16_white_under: {
    fontSize: 16,
    color: colorTheme.whiteShade,
    textDecorationLine: 'underline',
  },
  text_input_white_border: {
    height: 55,
    width: 260,
    color: 'black',
    backgroundColor: '#f0f0f0',
    borderColor: colorTheme.whiteShade,
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    fontSize: 18,
  },
  text_input_error: {
    height: 55,
    width: 260,
    color: 'black',
    backgroundColor: colorTheme.bckgrErrShade,
    borderColor: colorTheme.errShade,
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    fontSize: 18,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default styles;
