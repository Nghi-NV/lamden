/**
 * Created by nghinv on Sat Nov 05 2022
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { Background, LogoWithSlogan } from '../../components';

function SplashScreen() {
  return (
    <Background style={styles.container}>
      <LogoWithSlogan />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(SplashScreen);
