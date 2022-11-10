/**
 * Created by nghinv on Sat Nov 05 2022
 */

import { TextStyle } from 'react-native';
import Colors from './colors';
import Fonts from './fonts';

class Typography {
  static bigTitle: TextStyle = {
    fontSize: 23,
    lineHeight: 28,
    fontWeight: 'bold',
    fontFamily: Fonts.fontFamily,
    color: Colors.gray,
  };

  static paraText: TextStyle = {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: Fonts.fontFamily,
    color: Colors.gray,
  };

  static buttonText: TextStyle = {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: Fonts.fontFamily,
    color: Colors.gray,
    textAlign: 'center',
  };

  static buttonTextBold: TextStyle = {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: 'bold',
    fontFamily: Fonts.fontFamily,
    color: Colors.gray,
    textAlign: 'center',
  };

  static title: TextStyle = {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    fontFamily: Fonts.fontFamily,
    color: Colors.gray,
  };

  static smallText: TextStyle = {
    fontSize: 13,
    lineHeight: 22,
    fontWeight: '600',
    fontFamily: Fonts.fontFamily,
    color: Colors.gray,
  };

  static smallText2: TextStyle = {
    fontSize: 13,
    lineHeight: 22,
    fontWeight: 'bold',
    fontFamily: Fonts.fontFamily,
    color: Colors.gray,
  };
}

export default Typography;
