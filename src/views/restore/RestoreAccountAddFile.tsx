/**
 * Created by nghinv on Mon Nov 07 2022
 */

import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Background,
  Box,
  Dropdown,
  ElevatedButton,
  LogoWithSlogan,
} from '../../components';
import { RestoreAccountAddFileNavigationProp } from '../../navigation/types';
import { Colors, Dimens, Typography } from '../../services/themes';

function RestoreAccountAddFile() {
  const navigation = useNavigation<RestoreAccountAddFileNavigationProp>();

  const onNext = useCallback(() => {
    navigation.navigate('RestoreAccountPrivateKey');
  }, [navigation]);

  const onSelectKeyStoreFile = useCallback(() => {
    // TODO
  }, []);

  const onChooseFile = useCallback(() => {
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
          <Text>
            <Text>
              <Text
                onPress={onChooseFile}
                style={[Typography.smallText, styles.txtContent]}>
                Click here to choose a file
              </Text>
              <Text style={[Typography.smallText, styles.txtTitle]}>
                {' or choose file from your device'}
              </Text>
            </Text>
          </Text>
          <View style={styles.preview}>
            <Icon
              name="add-photo-alternate"
              size={24}
              color={Colors.darkGray}
            />
          </View>
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

export default React.memo(RestoreAccountAddFile);
