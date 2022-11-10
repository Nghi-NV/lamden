/**
 * Created by nghinv on Sun Nov 06 2022
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInputProps,
  TextStyle,
  TextInput,
} from 'react-native';
import { Colors, Typography } from '../../services/themes';

export interface TextFieldProps extends TextInputProps {
  title?: string;
  titleStyle?: TextStyle;
  height?: number | string;
  width?: number | string;
  rightComponent?: React.ReactNode;
}

function TextField(props: TextFieldProps) {
  const { title, titleStyle, height = 45, width, rightComponent } = props;
  return (
    <View style={styles.container}>
      {title !== undefined && (
        <Text style={[styles.txtTitle, titleStyle]}>{title}</Text>
      )}

      <View style={[styles.viewInput, { height, width }]}>
        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor={Colors.darkGray}
          autoCorrect={false}
        />
        {rightComponent}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  txtTitle: {
    ...Typography.buttonTextBold,
    marginBottom: 10,
    textAlign: 'auto',
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: Colors.darkGray,
  },
  input: {
    ...Typography.smallText,
    color: Colors.white,
    lineHeight: 18,
  },
});

export default React.memo(TextField);
