import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tab1StackParamList } from './types';
import VaultAccount from '../views/account/VaultAccount';

const Stack = createNativeStackNavigator<Tab1StackParamList>();

export function Tab1Stack() {
  return (
    <Stack.Navigator
      initialRouteName="VaultAccount"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="VaultAccount" component={VaultAccount} />
    </Stack.Navigator>
  );
}
