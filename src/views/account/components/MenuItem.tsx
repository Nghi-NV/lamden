import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Typography } from '../../../services/themes';

interface MenuItemProps {
  title: string;
  onPress: () => void;
  value: string;
  icon: React.ReactNode;
}

function MenuItem({ title, value, onPress, icon }: MenuItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      <Text style={styles.txtTitle}>{title}</Text>
      <Text style={styles.txtValue}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    ...Typography.smallText,
    color: Colors.darkGray,
    marginTop: 14,
    marginBottom: 10,
    lineHeight: undefined,
    textAlign: 'center',
  },
  txtValue: {
    ...Typography.smallText,
    lineHeight: undefined,
    textAlign: 'center',
  },
});

export default React.memo(MenuItem);
