/**
 * Created by nghinv on Sun Nov 06 2022
 */

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Slogan from '../Slogan/Slogan';
import Logo from './Logo';

interface LogoWithSloganProps {
  type?: 'column' | 'row';
  style?: ViewStyle;
}

function LogoWithSlogan({ type = 'column', style }: LogoWithSloganProps) {
  return (
    <View style={[styles.container, type === 'row' && styles.rowType, style]}>
      <Logo size={type === 'row' ? 25 : 88} />
      <View style={styles.space} />
      <Slogan size={type === 'row' ? 120 : 180} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowType: {
    flexDirection: 'row',
  },
  space: {
    width: 8,
    height: 6,
  },
});

export default React.memo(LogoWithSlogan);
