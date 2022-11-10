/**
 * Created by nghinv on Mon Nov 07 2022
 */

import React, { useCallback } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextStyle,
  LayoutAnimation,
  ViewStyle,
} from 'react-native';
import { Typography } from '../../services/themes';
import { CheckSvg, UnCheckSvg } from '../../utils/assets';

interface CHeckBoxProps {
  isCheck?: boolean;
  onChange?: (isCheck: boolean) => void;
  disabled?: boolean;
  size?: number;
  title?: string;
  titleStyle?: TextStyle;
  style?: ViewStyle;
}

function CHeckBox({
  isCheck = false,
  onChange,
  disabled = false,
  size = 24,
  title,
  titleStyle,
  style,
}: CHeckBoxProps) {
  const onChangeCheck = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onChange?.(!isCheck);
  }, [isCheck, onChange]);

  return (
    <TouchableOpacity
      onPress={onChangeCheck}
      disabled={disabled}
      style={[styles.container, style, disabled && styles.disable]}>
      {isCheck ? (
        <CheckSvg width={size} height={size} />
      ) : (
        <UnCheckSvg width={size} height={size} />
      )}
      {title && <Text style={[styles.txtTitle, titleStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  disable: {
    opacity: 0.5,
  },
  txtTitle: {
    ...Typography.buttonText,
    marginLeft: 10,
  },
});

export default React.memo(CHeckBox);
