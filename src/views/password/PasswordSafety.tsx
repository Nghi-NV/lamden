/**
 * Created by nghinv on Sun Nov 06 2022
 */

import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Background,
  ElevatedButton,
  LogoWithSlogan,
  TextButton,
} from '../../components';
import {
  PasswordSafetyNavigationProp,
  PasswordSafetyScreenRouteProp,
} from '../../navigation/types';
import { Colors, Dimens, Typography } from '../../services/themes';

function PasswordSafety() {
  const navigation = useNavigation<PasswordSafetyNavigationProp>();
  const route = useRoute<PasswordSafetyScreenRouteProp>();

  const onLastPassword = useCallback(() => {
    //
  }, []);

  const onHelpAndFaq = useCallback(() => {
    //
  }, []);

  const onCreatePassword = useCallback(() => {
    navigation.navigate('CreatePassword', {
      isRestore: route.params.isRestore,
    });
  }, [navigation, route.params.isRestore]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <LogoWithSlogan type="row" />
        <View style={styles.viewContent}>
          <Text style={Typography.bigTitle}>Password Safety</Text>
          <Text>
            <Text style={[Typography.paraText, styles.txtContent]}>
              For maximum security we suggest creating a complex password and
              storing it in a password manager such as
            </Text>
            <Text onPress={onLastPassword} style={styles.txtBtn}>
              {' Last pass'}
            </Text>
          </Text>
          <Text style={styles.txtLastContent}>
            Lamden is not responsible for lost or stolen password
          </Text>
        </View>
        <ElevatedButton onPress={onHelpAndFaq} title="Help & FAQ" />
        <TextButton
          style={styles.button}
          onPress={onCreatePassword}
          title="Create Password"
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
    paddingTop: 16,
  },
  viewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContent: {
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    marginVertical: Dimens.marginV,
  },
  txtBtn: {
    ...Typography.buttonTextBold,
    color: Colors.purple,
    textDecorationLine: 'underline',
  },
  txtLastContent: {
    ...Typography.paraText,
    marginTop: 10,
    color: Colors.orange,
    textAlign: 'center',
  },
});

export default React.memo(PasswordSafety);
