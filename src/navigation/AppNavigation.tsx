/**
 * Created by nghinv on Sat Nov 05 2022
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { AuthenNavigation } from './AuthenNavigation';
import { BottomBarNavigation } from './BottomBarNavigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="BottomBar"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <RootStack.Screen name="AuthenStack" component={AuthenNavigation} />
        <RootStack.Screen name="BottomBar" component={BottomBarNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
