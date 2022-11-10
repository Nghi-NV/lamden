/**
 * Created by nghinv on Sun Nov 06 2022
 */

import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Background, ElevatedButton, LogoWithSlogan } from '../../components';
import { GetStartNavigationProp } from '../../navigation/types';
import { Colors, Dimens } from '../../services/themes';

function GetStart() {
  const navigation = useNavigation<GetStartNavigationProp>();

  const onCreateWallet = useCallback(() => {
    navigation.navigate('PasswordSafety', { isRestore: false });
  }, [navigation]);

  const onRestoreWallet = useCallback(() => {
    navigation.navigate('PasswordSafety', { isRestore: true });
  }, [navigation]);

  return (
    <Background style={styles.container}>
      <LogoWithSlogan />
      <View style={styles.box} />
      <ElevatedButton onPress={onCreateWallet} title="Create a wallet" />
      <View style={styles.box2} />
      <ElevatedButton
        onPress={onRestoreWallet}
        title="Restore a wallet"
        backgroundColor={Colors.lightBlack}
      />
      <View style={styles.box3} />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: Dimens.paddingH,
  },
  box: {
    height: 20,
  },
  box2: {
    height: 15,
  },
  box3: {
    height: 100,
  },
});

export default React.memo(GetStart);
