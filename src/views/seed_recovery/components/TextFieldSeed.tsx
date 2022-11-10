/**
 * Created by nghinv on Mon Nov 07 2022
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextField } from '../../../components';
import { Colors, Typography } from '../../../services/themes';

interface TextFieldSeedProps {
  number: number;
}

function TextFieldSeed({ number }: TextFieldSeedProps) {
  const value = `Seed ${number}`;
  return (
    <View style={[styles.container, number % 3 !== 0 && styles.row]}>
      <View style={styles.viewNumber}>
        <Text style={styles.txtNumber}>{number}</Text>
      </View>
      <TextField value={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    flex: 1,
    marginBottom: 22,
  },
  row: {
    marginRight: 20,
  },
  viewNumber: {
    position: 'absolute',
    top: -10,
    left: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    elevation: 1,
  },
  txtNumber: {
    ...Typography.smallText,
    color: Colors.darkGray,
  },
});

export default React.memo(TextFieldSeed);
