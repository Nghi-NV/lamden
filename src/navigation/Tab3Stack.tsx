import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tab3StackParamList } from './types';
import AboutAndInfo from '../views/about_info/AboutAndInfo';

const Stack = createNativeStackNavigator<Tab3StackParamList>();

export function Tab3Stack() {
  return (
    <Stack.Navigator
      initialRouteName="AboutAndInfo"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="AboutAndInfo" component={AboutAndInfo} />
    </Stack.Navigator>
  );
}
