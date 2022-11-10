/**
 * Created by nghinv on Sat Nov 05 2022
 */

import React from 'react';
import { SloganSvg } from '../../utils/assets';

interface SloganProps {
  size?: number;
  color?: string;
}

function Slogan({ size = 180, color }: SloganProps) {
  return <SloganSvg width={size} color={color} />;
}

export default React.memo(Slogan);
