/**
 * Created by nghinv on Wed Nov 09 2022
 */

import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { Background } from '../../components';
import { imagesPath } from '../../utils/assets';

function SafetyAndSecure() {
  return (
    <Background style={styles.container}>
      <Image source={imagesPath.navbarBackground} style={styles.navImage} />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navImage: {
    height: 184,
    width: 200,
  },
});

export default React.memo(SafetyAndSecure);
