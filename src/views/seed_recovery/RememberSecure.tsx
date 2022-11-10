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
import { RememberSecureNavigationProp } from '../../navigation/types';
import { Colors, Dimens, Typography } from '../../services/themes';

function RememberSecure() {
  const navigation = useNavigation<RememberSecureNavigationProp>();
  const [isConfirm, setIsConfirm] = React.useState(false);

  const onUnderstand = useCallback(() => {
    navigation.navigate('VerifySeedRecovery');
  }, [navigation]);

  const onBack = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <LogoWithSlogan type="row" />
        <View style={styles.viewContent}>
          <Text style={[Typography.title, styles.txtTitle]}>Remember</Text>
          <Box height={20} />
          <View style={styles.viewCheckBox}>
            <CheckBox isCheck={isConfirm} onChange={setIsConfirm} />
          </View>
          <Box height={10} />
          <Text style={[Typography.paraText, styles.txtTitle]}>
            I understand that it is my responsibility to keep my password and
            Secret Recovery phrase safe.
          </Text>
        </View>
        <ElevatedButton
          disabled={!isConfirm}
          onPress={onUnderstand}
          title="I understand"
        />
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

export default React.memo(RememberSecure);
