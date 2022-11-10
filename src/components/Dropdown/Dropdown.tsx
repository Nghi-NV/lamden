/**
 * Created by nghinv on Tue Nov 08 2022
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Typography } from '../../services/themes';

interface DropdownProps {
  title?: string;
  titleStyle?: TextStyle;
  value?: string;
  valueStyle?: TextStyle;
  style?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
  height?: number;
}

function Dropdown({
  title,
  value,
  onPress,
  titleStyle,
  valueStyle,
  style,
  disabled = false,
  height = 45,
}: DropdownProps) {
  const ButtonComponent: React.ElementType = disabled ? View : TouchableOpacity;

  return (
    <View style={styles.container}>
      {title !== undefined && (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
      <ButtonComponent
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.dropdown,
          { height },
          style,
          disabled && styles.disabled,
        ]}>
        <View style={styles.viewContent}>
          <Text style={[styles.txtContent, valueStyle]}>{value ?? ''}</Text>
        </View>
        <Icon name="arrow-drop-down" size={24} color={Colors.purple} />
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    ...Typography.buttonTextBold,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.darkGray,
    paddingHorizontal: 16,
  },
  viewContent: {
    flex: 1,
    paddingRight: 8,
  },
  txtContent: {
    ...Typography.smallText,
    color: Colors.darkGray,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default React.memo(Dropdown);
