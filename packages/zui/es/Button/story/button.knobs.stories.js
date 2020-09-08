import React from 'react';
import Button from '../Button';
import { boolean, radios } from '@storybook/addon-knobs';

export const ButtonWithKnobs = () => {

  const colorType = radios(
    'colorType=',
    {
      '(empty)': undefined,
      success: 'success',
      warning: 'warning',
      danger: 'danger',
    },
    undefined,
  );

  const size = radios(
    'size=',
    {
      '(empty)': undefined,
      small: 'small'
    },
    undefined,
  )

  const fullWidth = boolean(
    'fullWidth=',
    false,
  )

  return (
    <Button
      colorType={colorType}
      size={size}
      fullWidth={fullWidth}
    >
      按钮
    </Button>
  );
};
