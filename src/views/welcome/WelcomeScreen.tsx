/**
 * Created by nghinv on Sun Nov 06 2022
 */

import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Background,
  ElevatedButton,
  LogoWithSlogan,
  TextButton,
} from '../../components';
import { WelcomeNavigationProp } from '../../navigation/types';
import { Dimens, Typography } from '../../services/themes';

function WelcomeScreen() {
  const navigation = useNavigation<WelcomeNavigationProp>();

  const onHelpAndFaq = useCallback(() => {
    //
  }, []);

  const onGetStart = useCallback(() => {
    navigation.navigate('GetStart');
  }, [navigation]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.viewTop}>
          <LogoWithSlogan />
          <Text style={[Typography.bigTitle, styles.txtTitle]}>Welcome!</Text>
          <Text style={[Typography.paraText, styles.txtContent]}>
            Creating a Lamden Vault is easy and secure. All accounts are
            encrypted locally in your browser, not on remote servers.
          </Text>
        </View>
        <View style={styles.viewBottom}>
          <ElevatedButton onPress={onHelpAndFaq} title="Help & FAQ" />
          <TextButton
            style={styles.button}
            onPress={onGetStart}
            title="Get Start"
            underline
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Dimens.paddingH,
  },
  viewTop: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  viewBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  txtTitle: {
    marginTop: 25,
    marginBottom: 10,
  },
  txtContent: {
    textAlign: 'center',
  },
  button: {
    marginVertical: Dimens.marginV,
  },
});

export default React.memo(WelcomeScreen);
