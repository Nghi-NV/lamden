/**
 * Created by nghinv on Wed Nov 09 2022
 */

import React, { useCallback, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import {
  Background,
  Box,
  ElevatedButton,
  LogoWithSlogan,
} from '../../components';
import { Colors, Typography } from '../../services/themes';
import {
  AccountActiveSvg,
  CopyAddressSvg,
  DownSvg,
  imagesPath,
  PortPolioSvg,
  ReceiveTauSvg,
  RefreshSvg,
  SendTauSvg,
  SettingSvg,
  TokenSvg,
  TokenValueSvg,
  UpSvg,
  ValueSvg,
} from '../../utils/assets';
import LamdenVaultSection from './components/LamdenVaultSection';
import MenuItem from './components/MenuItem';

function VaultAccount() {
  const [isExpand, setIsExpand] = useState(false);

  const onChangeExpand = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpand(preState => !preState);
  }, []);

  return (
    <Background>
      <Image
        resizeMode="cover"
        source={imagesPath.navbarBackground}
        style={styles.navImage}
      />
      <View style={styles.header}>
        <LogoWithSlogan type="row" />
        <Text style={styles.txtHeader}>Welcome</Text>
        <Image
          source={imagesPath.avatar}
          style={styles.avatar}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity onPress={onChangeExpand} style={styles.accountName}>
        <Text style={styles.txtAccountName}>My TAU Lamden name</Text>
        {isExpand ? <DownSvg /> : <UpSvg />}
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.viewTotalTau}>
          <View style={styles.viewTitleTau}>
            <Text style={styles.txtTitleTau}>{'Total\nTAU'}</Text>
            <Text style={styles.txtAmount}>{'0.00'}</Text>
          </View>
          <View style={styles.viewTau}>
            <View style={styles.viewMenuItem}>
              <MenuItem
                title="Value"
                value={'$0.00'}
                icon={<ValueSvg />}
                onPress={() => {
                  //
                }}
              />
              <MenuItem
                title="Tokens"
                value={'0'}
                icon={<TokenSvg />}
                onPress={() => {
                  //
                }}
              />
              <MenuItem
                title="Total Value"
                value={'$0.00'}
                icon={<TokenValueSvg />}
                onPress={() => {
                  //
                }}
              />
              <MenuItem
                title="Portfolio"
                value={'%0.0'}
                icon={<PortPolioSvg />}
                onPress={() => {
                  //
                }}
              />
            </View>
            {isExpand && (
              <>
                <Box height={20} />
                <ElevatedButton
                  title="Send TAU"
                  backgroundColor={Colors.lightBlack}
                  icon={<SendTauSvg />}
                  onPress={() => {
                    //
                  }}
                />
                <Box height={20} />
                <ElevatedButton
                  title="Receive tau"
                  backgroundColor={Colors.lightBlack}
                  icon={<ReceiveTauSvg />}
                  onPress={() => {
                    //
                  }}
                />
                <Box height={20} />
                <ElevatedButton
                  title="Copy address"
                  backgroundColor={Colors.lightBlack}
                  icon={<CopyAddressSvg />}
                  onPress={() => {
                    //
                  }}
                />
                <Box height={20} />
                <ElevatedButton
                  title="View transaction history"
                  backgroundColor={Colors.lightBlack}
                  icon={<RefreshSvg />}
                  onPress={() => {
                    //
                  }}
                />
                <Box height={20} />
                <ElevatedButton
                  title="Options"
                  backgroundColor={Colors.lightBlack}
                  icon={<SettingSvg />}
                  onPress={() => {
                    //
                  }}
                />
              </>
            )}
          </View>
        </View>
        <Box height={40} />
        <LamdenVaultSection />
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 212,
    paddingTop: 66,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navImage: {
    height: 184,
    width: '100%',
    position: 'absolute',
  },
  txtHeader: {
    ...Typography.paraText,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: Colors.gray,
  },
  accountName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  txtAccountName: {
    ...Typography.title,
    marginRight: 10,
  },
  viewTotalTau: {
    marginHorizontal: 16,
  },
  viewTau: {
    borderWidth: 2,
    borderColor: Colors.purple,
    paddingVertical: 40,
    marginTop: 18,
    paddingHorizontal: 20,
  },
  viewTitleTau: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 99,
    paddingHorizontal: 12,
    backgroundColor: Colors.black,
  },
  txtTitleTau: {
    ...Typography.smallText2,
    color: Colors.purple,
    textAlign: 'center',
  },
  txtAmount: {
    fontSize: 40,
    marginLeft: 10,
    fontWeight: '600',
    color: Colors.lightBlue,
  },
  viewMenuItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default React.memo(VaultAccount);
