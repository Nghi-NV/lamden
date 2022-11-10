/**
 * Created by nghinv on Sat Nov 05 2022
 */

import React from 'react';
import { LogoSvg } from '../../utils/assets';

interface LogoProps {
  size?: number;
  color?: string;
}

function Logo({ size = 88, color }: LogoProps) {
  return <LogoSvg width={size} height={size} fill={color} />;
}

export default React.memo(Logo);
