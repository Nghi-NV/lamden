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
import { KeepYourSelfSecureNavigationProp } from '../../navigation/types';
import { Colors, Dimens, Typography } from '../../services/themes';

function KeepYourSelfSecure() {
  const navigation = useNavigation<KeepYourSelfSecureNavigationProp>();

  const onHelpAndFaq = useCallback(() => {
    // TODO
  }, []);

  const onRemember = useCallback(() => {
    navigation.navigate('RememberSecure');
  }, [navigation]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <LogoWithSlogan type="row" />
        <View style={styles.viewContent}>
          <Text style={[Typography.bigTitle, styles.txtTitle]}>
            Keeping Yourself Secure
          </Text>
          <Box height={10} />
          <Text>
            <Text style={[Typography.paraText, styles.txtTitle]}>
              Storing your password, Secret Recovery phrase, and backing up your
              Lamden Vault is
            </Text>
            <Text style={[Typography.paraText, styles.txtContent]}>
              {' your responsibility'}
            </Text>
            <Text style={[Typography.paraText, styles.txtTitle]}>
              . This is importation to keeping your cryptocurrency safe.
            </Text>
          </Text>
          <Box height={10} />

          <Box height={10} />
        </View>
        <ElevatedButton onPress={onHelpAndFaq} title="Help & FAQ" />
        <TextButton
          style={styles.button}
          onPress={onRemember}
          title="Remember"
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

export default React.memo(KeepYourSelfSecure);
