/**
 * Created by nghinv on Sun Nov 06 2022
 */

import React from 'react';
import { View } from 'react-native';

interface BoxProps {
  width?: number | string;
  height?: number | string;
}

function Box({ width, height }: BoxProps) {
  return <View style={{ width, height }} />;
}

export default React.memo(Box);
