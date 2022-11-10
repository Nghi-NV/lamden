/**
 * Created by nghinv on Mon Nov 07 2022
 */

import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Background,
  Box,
  ElevatedButton,
  LogoWithSlogan,
  TextButton,
} from '../../components';
import { RestoreAccountNavigationProp } from '../../navigation/types';
import { Colors, Dimens, Typography } from '../../services/themes';

function RestoreAccount() {
  const navigation = useNavigation<RestoreAccountNavigationProp>();

  const onHelpAndFaq = useCallback(() => {
    // TODO
  }, []);

  const onRestoreAccount = useCallback(() => {
    navigation.navigate('RestoreAccountAddFile');
  }, [navigation]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <LogoWithSlogan type="row" />
        <View style={styles.viewContent}>
          <Text style={[Typography.bigTitle, styles.txtTitle]}>
            Restore Accounts
          </Text>
          <Box height={10} />
          <Text style={[Typography.paraText, styles.txtTitle]}>
            To restore your accounts, please select the type of restore you want
            to perform then enter the information associated
          </Text>
          <Box height={10} />
        </View>
        <ElevatedButton onPress={onHelpAndFaq} title="Help & FAQ" />
        <TextButton
          style={styles.button}
          onPress={onRestoreAccount}
          title="Restore Accounts"
          underline
        />
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Dimens.paddingH,
    paddingBottom: 8,
  },
  viewContent: {
    flex: 1,
    justifyContent: 'center',
  },
  txtTitle: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  txtContent: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.orange,
  },
  button: {
    marginVertical: Dimens.marginV,
  },
});

export default React.memo(RestoreAccount);
