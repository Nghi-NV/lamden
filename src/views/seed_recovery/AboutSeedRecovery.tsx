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
import { AboutSeedRecoveryNavigationProp } from '../../navigation/types';
import { Colors, Dimens, Typography } from '../../services/themes';

function AboutSeedRecovery() {
  const navigation = useNavigation<AboutSeedRecoveryNavigationProp>();

  const onHelpAndFaq = useCallback(() => {
    // TODO
  }, []);

  const onCopySeed = useCallback(() => {
    navigation.navigate('SelectSeedRecovery');
  }, [navigation]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <LogoWithSlogan type="row" />
        <View style={styles.viewContent}>
          <Text style={[Typography.bigTitle, styles.txtTitle]}>
            About seed Recovery Phrases
          </Text>
          <Box height={10} />
          <Text style={[Typography.paraText, styles.txtTitle]}>
            Your Secret Recovery Phrase meknes it easy to back up and restore
            all accounts
          </Text>
          <Box height={10} />
          <Text style={[Typography.paraText, styles.txtContent]}>
            Never disclose your Secret Recovery Phrase. These words can be used
            to steal all your accounts.
          </Text>
          <Box height={10} />
        </View>
        <ElevatedButton onPress={onHelpAndFaq} title="Help & FAQ" />
        <TextButton
          style={styles.button}
          onPress={onCopySeed}
          title="Copy Seed Recovery Phase"
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

export default React.memo(AboutSeedRecovery);
