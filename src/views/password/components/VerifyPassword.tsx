/**
 * Created by nghinv on Sun Nov 06 2022
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Typography } from '../../../services/themes';

interface VerifyPasswordProps {
  isVerify?: boolean;
  title: string;
}

function VerifyPassword({ isVerify = false, title }: VerifyPasswordProps) {
  return (
    <View style={styles.container}>
      {isVerify && <Icon name="check" color={Colors.green} />}
      <Text
        style={[
          styles.txtTitle,
          { color: isVerify ? Colors.gray : Colors.purple },
        ]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtTitle: {
    ...Typography.smallText,
    marginLeft: 4,
  },
});

export default React.memo(VerifyPassword);
