/**
 * Created by nghinv on Wed Nov 09 2022
 */

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CheckBox } from '../../../components';
import { Tau } from '../../../models/tau';
import { Colors, Typography } from '../../../services/themes';

interface AccountItemProps {
  item: Tau;
  isSelect?: boolean;
  onPress?: () => void;
  disabled?: boolean;
}

function AccountItem({
  item,
  isSelect,
  onPress,
  disabled = false,
}: AccountItemProps) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={styles.container}>
        <CheckBox size={14} isCheck={isSelect} style={styles.checkBox} />
        <View style={styles.viewContent}>
          <View style={styles.viewTop}>
            <View style={styles.viewName}>
              <Text style={styles.txtName}>{item.name}</Text>
            </View>
            <View style={styles.viewAccount}>
              <Text style={styles.txtAccount}>{`My ${item.type} Account`}</Text>
            </View>
          </View>
          <Text numberOfLines={1} style={styles.txtDescription}>
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
      {isSelect && (
        <View style={styles.viewSelected}>
          <Text style={styles.txtSelected}>
            {`Add My ${item.type} Account to your Lamden Vault`}
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.lightBlack,
    marginTop: 15,
    padding: 15,
  },
  checkBox: {
    marginTop: 4,
  },
  viewContent: {
    flex: 1,
    paddingLeft: 9,
  },
  viewTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  txtName: {
    ...Typography.paraText,
    fontWeight: 'bold',
    lineHeight: undefined,
  },
  txtAccount: {
    ...Typography.paraText,
    color: Colors.darkGray,
    lineHeight: undefined,
  },
  txtDescription: {
    ...Typography.paraText,
    lineHeight: undefined,
  },
  viewName: {
    flex: 1,
  },
  viewAccount: {
    flex: 1,
    alignItems: 'flex-end',
    paddingLeft: 8,
  },
  viewSelected: {
    marginTop: 5,
  },
  txtSelected: {
    ...Typography.paraText,
    color: Colors.green,
  },
});

export default React.memo(AccountItem);
