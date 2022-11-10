/**
 * Created by nghinv on Sun Nov 06 2022
 */

import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Background,
  Box,
  ElevatedButton,
  LogoWithSlogan,
  TextFieldPassword,
} from '../../components';
import { VerifyPasswordInterface } from '../../models/verifyPassword';
import {
  CreatePasswordNavigationProp,
  CreatePasswordScreenRouteProp,
} from '../../navigation/types';
import { Colors, Dimens, Typography } from '../../services/themes';
import VerifyPassword from './components/VerifyPassword';

function CreatePassword() {
  const navigation = useNavigation<CreatePasswordNavigationProp>();
  const route = useRoute<CreatePasswordScreenRouteProp>();

  const [verified, setVerified] = useState<VerifyPasswordInterface>({
    isMoreThanTenCharacters: false,
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasSpecialCharacter: false,
    confirmPassword: false,
  });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isVerify = useMemo(() => {
    return (
      verified.isMoreThanTenCharacters &&
      verified.hasLowerCase &&
      verified.hasUpperCase &&
      verified.hasNumber &&
      verified.hasSpecialCharacter &&
      verified.confirmPassword
    );
  }, [verified]);

  useEffect(() => {
    setVerified({
      isMoreThanTenCharacters: password.length >= 10,
      hasLowerCase: /[a-z]/.test(password),
      hasUpperCase: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialCharacter: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
        password,
      ),
      confirmPassword: password === confirmPassword,
    });
  }, [password, confirmPassword]);

  const onSavePassword = useCallback(() => {
    if (route.params.isRestore) {
      navigation.navigate('RestoreAccount');
    } else {
      navigation.navigate('AboutSeedRecovery');
    }
  }, [navigation, route.params.isRestore]);

  const onBack = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <LogoWithSlogan type="row" />
        <View style={styles.viewContent}>
          <Text style={[Typography.title, styles.txtTitle]}>
            Create Password
          </Text>
          <Box height={20} />
          <TextFieldPassword
            title="Password"
            placeholder="At least 10 symbols"
            value={password}
            onChangeText={setPassword}
          />
          <Box height={10} />
          <View style={styles.viewVerify}>
            <View style={styles.viewVerifyItem}>
              <VerifyPassword
                isVerify={verified.isMoreThanTenCharacters}
                title="10 or more characters"
              />
              <VerifyPassword
                isVerify={verified.hasLowerCase}
                title="1 Lowercase letter"
              />
              <VerifyPassword
                isVerify={verified.hasUpperCase}
                title="1 Capital letter"
              />
            </View>
            <View style={styles.viewVerifyItem}>
              <VerifyPassword isVerify={verified.hasNumber} title="1 Number" />
              <VerifyPassword
                isVerify={verified.hasSpecialCharacter}
                title="1 Special Character"
              />
            </View>
          </View>
          <Box height={15} />
          <TextFieldPassword
            title="Confirm Password"
            placeholder="At least 10 symbols"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Box height={10} />
          {password.length > 0 && confirmPassword.length > 0 && (
            <VerifyPassword
              isVerify={verified.confirmPassword}
              title="The same password"
            />
          )}
        </View>
        <ElevatedButton
          disabled={isVerify}
          onPress={onSavePassword}
          title="Save password"
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
  },
  viewContent: {
    flex: 1,
    justifyContent: 'center',
  },
  txtTitle: {
    alignSelf: 'center',
  },
  button: {
    marginVertical: Dimens.marginV,
  },
  viewVerify: {
    flexDirection: 'row',
  },
  viewVerifyItem: {
    flex: 1,
  },
});

export default React.memo(CreatePassword);
