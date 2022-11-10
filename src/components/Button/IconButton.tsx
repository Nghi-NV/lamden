import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../services/themes';

interface IconButtonProps {
  size?: number;
  onPress?: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
  disabled?: boolean;
}

function IconButton({
  size = 40,
  style,
  onPress,
  backgroundColor = 'transparent',
  disabled = false,
}: IconButtonProps) {
  const ButtonComponent: React.ElementType =
    disabled || !onPress ? View : TouchableOpacity;

  return (
    <ButtonComponent
      onPress={onPress}
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
        style,
        disabled && styles.disabled,
      ]}>
      <Icon name="arrow-back" size={24} color={Colors.white} />
    </ButtonComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default React.memo(IconButton);
