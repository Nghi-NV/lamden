import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tab2StackParamList } from './types';
import SafetyAndSecure from '../views/safety_secure/SafetyAndSecure';

const Stack = createNativeStackNavigator<Tab2StackParamList>();

export function Tab2Stack() {
  return (
    <Stack.Navigator
      initialRouteName="SafetyAndSecure"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="SafetyAndSecure" component={SafetyAndSecure} />
    </Stack.Navigator>
  );
}
