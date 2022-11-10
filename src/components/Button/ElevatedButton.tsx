import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { Colors, Typography } from '../../services/themes';

interface ElevatedButtonProps {
  width?: number | string;
  height?: number;
  title: string;
  uppercase?: boolean;
  titleStyle?: TextStyle;
  style?: ViewStyle;
  onPress?: () => void;
  backgroundColor?: string;
  disabled?: boolean;
  type?: 'full' | 'normal';
}

function ElevatedButton({
  width,
  height = 40,
  title,
  uppercase = true,
  titleStyle,
  style,
  onPress,
  backgroundColor = Colors.purple,
  disabled = false,
  type = 'full',
}: ElevatedButtonProps) {
  const ButtonComponent: React.ElementType =
    disabled || !onPress ? View : TouchableOpacity;
  const _width = type === 'full' ? '100%' : width;

  return (
    <ButtonComponent
      onPress={onPress}
      style={[
        styles.container,
        { width: _width, height, backgroundColor },
        style,
        disabled && styles.disabled,
      ]}>
      <Text style={[Typography.buttonText, titleStyle]}>
        {uppercase ? title.toLocaleUpperCase() : title}
      </Text>
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

export default React.memo(ElevatedButton);
