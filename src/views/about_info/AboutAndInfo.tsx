/**
 * Created by nghinv on Wed Nov 09 2022
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Background } from '../../components';

function AboutAndInfo() {
  return (
    <Background style={styles.container}>
      <Text>AboutAndInfo</Text>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(AboutAndInfo);
