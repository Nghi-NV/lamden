import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { Typography } from '../../services/themes';
import { hitSlop } from '../../utils';

interface TextButtonProps {
  title: string;
  uppercase?: boolean;
  titleStyle?: TextStyle;
  style?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
  underline?: boolean;
}

function TextButton({
  title,
  uppercase = false,
  titleStyle,
  style,
  onPress,
  disabled = false,
  underline = false,
}: TextButtonProps) {
  const ButtonComponent: React.ElementType =
    disabled || !onPress ? View : TouchableOpacity;

  return (
    <ButtonComponent
      onPress={onPress}
      hitSlop={hitSlop}
      style={[styles.container, style, disabled && styles.disabled]}>
      <Text
        onPress={onPress}
        style={[
          Typography.buttonTextBold,
          underline && styles.underline,
          titleStyle,
        ]}>
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
  underline: {
    textDecorationLine: 'underline',
  },
});

export default React.memo(TextButton);
