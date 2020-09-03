import React from 'react';
import Icon from '../Icon';
import svgs from './iconfont_svg';
import { color, number } from '@storybook/addon-knobs';

export const IconWidthKnobs = () => {

  const colorProp = color(
    'color=',
    '#ffa423',
  );

  const size = number(
    'size=',
    32
  )

  const rotate = number(
    'rotate=',
    0,
    {
      range: true,
      max: 360,
      min: 0,
      step: 1,
    }
  )

  return (
    <Icon
      svg={svgs['cc-icon-loading']}
      color={colorProp}
      size={size}
      rotate={rotate}
    />
  );
};