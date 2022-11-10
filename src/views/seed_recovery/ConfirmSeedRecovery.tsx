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
  CheckBox,
  ElevatedButton,
  LogoWithSlogan,
} from '../../components';
import { ConfirmSeedRecoveryNavigationProp } from '../../navigation/types';
import { Dimens, Typography } from '../../services/themes';

function ConfirmSeedRecovery() {
  const navigation = useNavigation<ConfirmSeedRecoveryNavigationProp>();
  const [isConfirm, setIsConfirm] = React.useState(false);

  const onNext = useCallback(() => {
    navigation.navigate('VerifySeedRecovery');
  }, [navigation]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <LogoWithSlogan type="row" />
        <View style={styles.viewContent}>
          <Text style={[Typography.title, styles.txtTitle]}>
            Copy Your Seed Recovery Phrase
          </Text>
          <Box height={20} />
          <View style={styles.viewCheckBox}>
            <CheckBox isCheck={isConfirm} onChange={setIsConfirm} />
          </View>
          <Box height={10} />
          <Text style={[Typography.paraText, styles.txtTitle]}>
            I have copied my Secret Recovery phrase in this exact order on
            paper, on a USB drive, and in a password manger
          </Text>
        </View>
        <ElevatedButton disabled={!isConfirm} onPress={onNext} title="Next" />
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
  flatList: {
    paddingVertical: 32,
  },
  txtTitle: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    marginVertical: Dimens.marginV,
  },
  viewCheckBox: {
    alignSelf: 'center',
  },
});

export default React.memo(ConfirmSeedRecovery);
