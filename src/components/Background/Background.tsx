/**
 * Created by nghinv on Sun Nov 06 2022
 */

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Colors from '../../services/themes/colors';

interface BackgroundProps {
  style?: ViewStyle;
  children?: React.ReactNode;
}

function Background({ style, children }: BackgroundProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

export default React.memo(Background);
