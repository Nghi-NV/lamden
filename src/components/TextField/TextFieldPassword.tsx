/**
 * Created by nghinv on Sun Nov 06 2022
 */

import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInputProps,
  TextStyle,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Typography } from '../../services/themes';
import { hitSlop } from '../../utils';
import { TextFieldProps } from './TextField';

interface TextFieldPasswordProps extends TextFieldProps { }

function TextFieldPassword(props: TextFieldPasswordProps) {
  const { title, titleStyle, height = 45, width } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onToggleShowPassword = useCallback(() => {
    setShowPassword(preState => !preState);
  }, []);

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
          autoCapitalize="none"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity hitSlop={hitSlop} onPress={onToggleShowPassword}>
          <Icon
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={20}
            color={Colors.purple}
          />
        </TouchableOpacity>
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
    color: Colors.darkGray,
    lineHeight: 18,
    flex: 1,
    marginRight: 8,
  },
});

export default React.memo(TextFieldPassword);
