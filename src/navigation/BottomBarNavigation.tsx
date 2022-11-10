import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomBarParamList } from './types';
import { Tab1Stack } from './Tab1Stack';
import { Tab2Stack } from './Tab2Stack';
import { Tab3Stack } from './Tab3Stack';
import {
  AboutActiveSvg,
  AboutInactiveSvg,
  AccountActiveSvg,
  AccountInactiveSvg,
  SafetyActiveSvg,
  SafetyInactiveSvg,
} from '../utils/assets';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../services/themes';

const Tab = createBottomTabNavigator<BottomBarParamList>();

export function BottomBarNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Tab1"
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => <View style={styles.tabbar} />,
        tabBarLabelStyle: {
          color: Colors.gray,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Vault Account',
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <AccountActiveSvg size={size} />
            ) : (
              <AccountInactiveSvg size={size} />
            ),
        }}
        name="Tab1"
        component={Tab1Stack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Safety & Security',
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <SafetyActiveSvg size={size} />
            ) : (
              <SafetyInactiveSvg size={size} />
            ),
        }}
        name="Tab2"
        component={Tab2Stack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'About & Info',
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <AboutActiveSvg size={size} />
            ) : (
              <AboutInactiveSvg size={size} />
            ),
        }}
        name="Tab3"
        component={Tab3Stack}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: Colors.lightBlack,
    flex: 1,
  },
});
