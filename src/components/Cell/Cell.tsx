/**
 * Created by nghinv on Tue Nov 15 2022
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { Typography } from '../../services/themes';

interface CellProps {
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  separator?: boolean;
}

function Cell({
  leading,
  trailing,
  title,
  onPress,
  style,
  titleStyle,
  separator = true,
}: CellProps) {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        {leading && <View style={styles.leading}>{leading}</View>}
        <View style={styles.viewTitle}>
          <Text style={[styles.txtTitle, titleStyle]}>{title}</Text>
        </View>
        {trailing && <View style={styles.trailing}>{trailing}</View>}
      </TouchableOpacity>
      {separator && (
        <View
          style={[
            styles.separator,
            leading !== undefined && styles.separatorLeading,
          ]}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  leading: {
    marginRight: 12,
  },
  viewTitle: {
    flex: 1,
    justifyContent: 'center',
  },
  txtTitle: {
    ...Typography.smallText2,
  },
  trailing: {},
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  separatorLeading: {
    marginLeft: 26,
  },
});

export default React.memo(Cell);
