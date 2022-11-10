import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  AuthenStack: undefined;
  BottomBar: undefined;
};

export type AuthenStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  GetStart: undefined;
  PasswordSafety: { isRestore: boolean };
  CreatePassword: { isRestore: boolean };
  AboutSeedRecovery: undefined;
  SelectSeedRecovery: undefined;
  ConfirmSeedRecovery: undefined;
  VerifySeedRecovery: undefined;
  KeepYourSelfSecure: undefined;
  RememberSecure: undefined;
  RestoreAccount: undefined;
  RestoreAccountAddFile: undefined;
  RestoreAccountPrivateKey: undefined;
  RestoreAccountAdd: undefined;
  RestoreAccountAllAccount: undefined;
};

export type BottomBarParamList = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
};

export type Tab1StackParamList = {
  VaultAccount: undefined;
};

export type Tab2StackParamList = {
  SafetyAndSecure: undefined;
};

export type Tab3StackParamList = {
  AboutAndInfo: undefined;
};

export type SplashNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'Splash'
>;

export type WelcomeNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'Welcome'
>;

export type GetStartNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'GetStart'
>;

export type PasswordSafetyNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'PasswordSafety'
>;

export type PasswordSafetyScreenRouteProp = RouteProp<
  AuthenStackParamList,
  'PasswordSafety'
>;

export type CreatePasswordNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'CreatePassword'
>;

export type CreatePasswordScreenRouteProp = RouteProp<
  AuthenStackParamList,
  'CreatePassword'
>;

export type AboutSeedRecoveryNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'AboutSeedRecovery'
>;

export type SelectSeedRecoveryNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'SelectSeedRecovery'
>;

export type ConfirmSeedRecoveryNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'ConfirmSeedRecovery'
>;

export type VerifySeedRecoveryNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'VerifySeedRecovery'
>;

export type KeepYourSelfSecureNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'KeepYourSelfSecure'
>;

export type RememberSecureNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'RememberSecure'
>;

export type RestoreAccountNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'RestoreAccount'
>;

export type RestoreAccountAddFileNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'RestoreAccountAddFile'
>;

export type RestoreAccountPrivateKeyNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'RestoreAccountPrivateKey'
>;

export type RestoreAccountAddNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'RestoreAccountAdd'
>;

export type RestoreAccountAllAccountNavigationProp = NativeStackNavigationProp<
  AuthenStackParamList,
  'RestoreAccountAllAccount'
>;
