/**
 * Created by nghinv on Mon Nov 07 2022
 */

import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Background,
  Box,
  CheckBox,
  ElevatedButton,
  IconButton,
  LogoWithSlogan,
} from '../../components';
import { VerifySeedRecoveryNavigationProp } from '../../navigation/types';
import { Dimens, Typography } from '../../services/themes';
import TextFieldSeed from './components/TextFieldSeed';

const listSeed = Array.from({ length: 24 }, (_, index) => index + 1);

function VerifySeedRecovery() {
  const navigation = useNavigation<VerifySeedRecoveryNavigationProp>();
  const [isCheck, setIsCheck] = useState(false);

  const onNext = useCallback(() => {
    navigation.navigate('KeepYourSelfSecure');
  }, [navigation]);

  const onBack = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  const renderItem = ({ index }: { item: number; index: number }) => {
    return <TextFieldSeed number={index + 1} />;
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.viewHeader}>
          <IconButton onPress={onBack} />
          <View style={styles.slogan}>
            <LogoWithSlogan type="row" />
          </View>
        </View>
        <Box height={20} />
        <Text style={[Typography.title, styles.txtTitle]}>
          Verify Seed Recovery Phrase
        </Text>
        <Box height={10} />
        <FlatList
          data={listSeed}
          keyExtractor={item => item.toString()}
          renderItem={renderItem}
          numColumns={3}
          contentContainerStyle={styles.flatList}
        />
        <View style={styles.viewBottom}>
          <CheckBox
            isCheck={isCheck}
            onChange={setIsCheck}
            size={16}
            title="Use non- stand phrase"
            style={styles.checkBox}
          />
          <ElevatedButton
            disabled={!isCheck}
            style={styles.button}
            onPress={onNext}
            title="Next"
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  slogan: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
  },
  txtTitle: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  flatList: {
    paddingVertical: 22,
    paddingHorizontal: Dimens.paddingH,
  },
  viewBottom: {
    paddingHorizontal: Dimens.paddingH,
  },
  checkBox: {
    alignSelf: 'center',
  },
  button: {
    marginVertical: Dimens.marginV,
  },
});

export default React.memo(VerifySeedRecovery);
