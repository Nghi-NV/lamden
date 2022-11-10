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
import { RestoreAccountAddNavigationProp } from '../../navigation/types';
import { Colors, Dimens, Typography } from '../../services/themes';

function RestoreAccountAdd() {
  const navigation = useNavigation<RestoreAccountAddNavigationProp>();

  const onHelpAndFaq = useCallback(() => {
    // TODO
  }, []);

  const onRestoreAccount = useCallback(() => {
    navigation.navigate('RestoreAccountAllAccount');
  }, [navigation]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <LogoWithSlogan type="row" />
        <View style={styles.viewContent}>
          <Text style={[Typography.bigTitle, styles.txtTitle]}>
            Add Accounts
          </Text>
          <Box height={10} />
          <Text style={[Typography.paraText, styles.txtTitle]}>
            Almost there! Now let’s select which Accounts you’d like to restore
          </Text>
          <Box height={10} />
        </View>
        <ElevatedButton onPress={onHelpAndFaq} title="Help & FAQ" />
        <TextButton
          style={styles.button}
          onPress={onRestoreAccount}
          title="All Accounts"
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

export default React.memo(RestoreAccountAdd);
