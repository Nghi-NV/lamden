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
import { SelectSeedRecoveryNavigationProp } from '../../navigation/types';
import { Dimens, Typography } from '../../services/themes';
import TextFieldSeed from './components/TextFieldSeed';

const listSeed = Array.from({ length: 24 }, (_, index) => index + 1);

function SelectSeedRecovery() {
  const navigation = useNavigation<SelectSeedRecoveryNavigationProp>();

  const onCopySecretRecoveryPhrase = useCallback(() => {
    navigation.navigate('ConfirmSeedRecovery');
  }, [navigation]);

  const renderItem = ({ index }: { item: number; index: number }) => {
    return <TextFieldSeed number={index + 1} />;
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <LogoWithSlogan type="row" />
        <Box height={20} />
        <View style={styles.viewContent}>
          <Text style={[Typography.title, styles.txtTitle]}>
            Copy Your Seed Recovery Phrase
          </Text>
          <Box height={10} />
          <FlatList
            data={listSeed}
            keyExtractor={item => item.toString()}
            renderItem={renderItem}
            numColumns={3}
            contentContainerStyle={styles.flatList}
          />
        </View>
        <ElevatedButton
          onPress={onCopySecretRecoveryPhrase}
          title="Copy Secret Recovery Phrase"
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
    paddingVertical: 22,
  },
  txtTitle: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    marginVertical: Dimens.marginV,
  },
});

export default React.memo(SelectSeedRecovery);
