/**
 * Created by nghinv on Wed Nov 02 2022
 */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { increment, decrement } from '../redux/reducers/counterSlice';
import Typography from '../services/themes/typography';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button onPress={() => dispatch(increment())} title="Increment" />
      <Button onPress={() => dispatch(decrement())} title="Decrement" />
      <Text style={Typography.bigTitle}>{`${count}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(Counter);
