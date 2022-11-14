/**
 * Created by nghinv on Tue Nov 15 2022
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Cell } from '../../../components';
import { Colors, Typography } from '../../../services/themes';
import {
  AllAccountSvg,
  ArrowSvg,
  DAppConnectionSvg,
  WhatNewSvg,
} from '../../../utils/assets';

function LamdenVaultSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Lamden Vault</Text>
      <Cell
        title="All accounts"
        leading={<AllAccountSvg />}
        trailing={<ArrowSvg />}
      />
      <Cell
        title="What’s new"
        leading={<WhatNewSvg />}
        trailing={
          <View style={styles.trailing}>
            <View style={styles.viewBadge}>
              <Text style={styles.txtBadge}>5</Text>
            </View>
            <ArrowSvg />
          </View>
        }
      />
      <Cell
        title="DApp Connections"
        leading={<DAppConnectionSvg />}
        trailing={<ArrowSvg />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  txtTitle: {
    ...Typography.smallText2,
    marginBottom: 20,
  },
  trailing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewBadge: {
    height: 20,
    paddingHorizontal: 8,
    minWidth: 20,
    borderRadius: 10,
    backgroundColor: Colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  txtBadge: {
    ...Typography.smallText,
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: undefined,
  },
});

export default React.memo(LamdenVaultSection);
