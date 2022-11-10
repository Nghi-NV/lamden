import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenStackParamList } from './types';
import SplashScreen from '../views/splash/SplashScreen';
import WelcomeScreen from '../views/welcome/WelcomeScreen';
import GetStart from '../views/get_start/GetStart';
import PasswordSafety from '../views/password/PasswordSafety';
import CreatePassword from '../views/password/CreatePassword';
import AboutSeedRecovery from '../views/seed_recovery/AboutSeedRecovery';
import SelectSeedRecovery from '../views/seed_recovery/SelectSeedRecovery';
import ConfirmSeedRecovery from '../views/seed_recovery/ConfirmSeedRecovery';
import VerifySeedRecovery from '../views/seed_recovery/VerifySeedRecovery';
import KeepYourSelfSecure from '../views/seed_recovery/KeepYourSelfSecure';
import RememberSecure from '../views/seed_recovery/RememberSecure';
import RestoreAccount from '../views/restore/RestoreAccount';
import RestoreAccountAddFile from '../views/restore/RestoreAccountAddFile';
import RestoreAccountPrivateKey from '../views/restore/RestoreAccountPrivateKey';
import RestoreAccountAdd from '../views/restore/RestoreAccountAdd';
import RestoreAccountAllAccount from '../views/restore/RestoreAccountAllAccount';

const AuthenStack = createNativeStackNavigator<AuthenStackParamList>();

export function AuthenNavigation() {
  return (
    <AuthenStack.Navigator
      initialRouteName="RestoreAccountAllAccount"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <AuthenStack.Screen name="Splash" component={SplashScreen} />
      <AuthenStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthenStack.Screen name="GetStart" component={GetStart} />
      <AuthenStack.Screen name="PasswordSafety" component={PasswordSafety} />
      <AuthenStack.Screen name="CreatePassword" component={CreatePassword} />
      <AuthenStack.Screen
        name="AboutSeedRecovery"
        component={AboutSeedRecovery}
      />
      <AuthenStack.Screen
        name="SelectSeedRecovery"
        component={SelectSeedRecovery}
      />
      <AuthenStack.Screen
        name="ConfirmSeedRecovery"
        component={ConfirmSeedRecovery}
      />
      <AuthenStack.Screen
        name="VerifySeedRecovery"
        component={VerifySeedRecovery}
      />
      <AuthenStack.Screen
        name="KeepYourSelfSecure"
        component={KeepYourSelfSecure}
      />
      <AuthenStack.Screen name="RememberSecure" component={RememberSecure} />
      <AuthenStack.Screen name="RestoreAccount" component={RestoreAccount} />
      <AuthenStack.Screen
        name="RestoreAccountAddFile"
        component={RestoreAccountAddFile}
      />
      <AuthenStack.Screen
        name="RestoreAccountPrivateKey"
        component={RestoreAccountPrivateKey}
      />
      <AuthenStack.Screen
        name="RestoreAccountAdd"
        component={RestoreAccountAdd}
      />
      <AuthenStack.Screen
        name="RestoreAccountAllAccount"
        component={RestoreAccountAllAccount}
      />
    </AuthenStack.Navigator>
  );
}
