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
  Dropdown,
  ElevatedButton,
  LogoWithSlogan,
  TextFieldPassword,
} from '../../components';
import { RestoreAccountPrivateKeyNavigationProp } from '../../navigation/types';
import { Colors, Dimens, Typography } from '../../services/themes';

function RestoreAccountPrivateKey() {
  const navigation = useNavigation<RestoreAccountPrivateKeyNavigationProp>();
  const [privateKey, setPrivateKey] = React.useState('');

  const onNext = useCallback(() => {
    navigation.navigate('RestoreAccountAdd');
  }, [navigation]);

  const onSelectKeyStoreFile = useCallback(() => {
    // TODO
  }, []);

  const onBack = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <LogoWithSlogan type="row" />
        <View style={styles.viewContent}>
          <Text style={[Typography.bigTitle, styles.txtTitle]}>
            Restore Accounts
          </Text>
          <Box height={20} />
          <Dropdown
            onPress={onSelectKeyStoreFile}
            title="Select Restore Type"
            value="Keystore File"
          />
          <Box height={15} />
          <TextFieldPassword
            title="Private key"
            value={privateKey}
            onChangeText={setPrivateKey}
            placeholder="Enter your private key"
            returnKeyType="done"
          />
        </View>
        <ElevatedButton onPress={onNext} title="Next" />
        <ElevatedButton
          style={styles.button}
          onPress={onBack}
          title="Back"
          backgroundColor={Colors.lightBlack}
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
    color: Colors.green,
  },
  button: {
    marginVertical: Dimens.marginV,
  },
  preview: {
    width: 70,
    height: 70,
    backgroundColor: Colors.lightBlack,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});

export default React.memo(RestoreAccountPrivateKey);
