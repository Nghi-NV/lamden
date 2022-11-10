/**
 * Created by nghinv on Mon Nov 07 2022
 */

import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Background,
  Box,
  ElevatedButton,
  LogoWithSlogan,
} from '../../components';
import { Tau } from '../../models/tau';
import { Colors, Dimens, Typography } from '../../services/themes';
import AccountItem from './components/AccountItem';

const taus: Tau[] = [
  {
    id: '1',
    name: 'Lamden (TAU)',
    address: '0x0000000000000000000000000000000000000000',
    balance: '0.000000000000000000',
    type: 'TAU',
    description: '0x0000000000000000000000000000000000000000',
  },
  {
    id: '2',
    name: 'Lamden (BCA)',
    address: '0x0000000000000000000000000000000000000000',
    balance: '0.000000000000000000',
    type: 'BCA',
    description: '0x0000000000000000000000000000000000000000',
  },
];

function RestoreAccountAllAccount() {
  const navigation = useNavigation<any>();
  const [tauSelected, setTauSelected] = React.useState<Tau>();
  const [isRestore, setIsRestore] = React.useState(false);

  const onRestoreAccount = useCallback(() => {
    setIsRestore(true);
  }, []);

  const onFinish = useCallback(() => {
    navigation.navigate('BottomBar');
  }, [navigation]);

  const onBack = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  const renderItem = ({ item }: { item: Tau }) => {
    return (
      <AccountItem
        item={item}
        isSelect={tauSelected?.id === item.id}
        disabled={isRestore}
        onPress={() => {
          setTauSelected(item);
        }}
      />
    );
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <LogoWithSlogan type="row" />
        <View style={styles.viewContent}>
          <Text style={[Typography.bigTitle, styles.txtTitle]}>
            All Accounts
          </Text>
          <Box height={10} />
          <FlatList
            data={taus}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.flatList}
          />
        </View>
        <ElevatedButton
          onPress={isRestore ? onFinish : onRestoreAccount}
          title={isRestore ? 'Finish' : 'Restore accounts'}
        />
        {!isRestore && (
          <>
            <Box height={15} />
            <ElevatedButton
              onPress={onBack}
              backgroundColor={Colors.lightBlack}
              title="Back"
            />
          </>
        )}
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
    paddingTop: 100,
  },
  flatList: {
    paddingBottom: 20,
  },
  txtTitle: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  txtContent: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.orange,
  },
  button: {
    marginVertical: Dimens.marginV,
  },
});

export default React.memo(RestoreAccountAllAccount);
