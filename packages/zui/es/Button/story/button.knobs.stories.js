import React from 'react';
import Button from '../Button';
import { boolean, radios } from '@storybook/addon-knobs';

export const ButtonWithKnobs = () => {

  const variant = radios(
    'variant=',
    {
      contained: 'contained',
      outline: 'outline',
      text: 'text',
    },
    'contained',
  );

  const colorType = radios(
    'colorType=',
    {
      default: 'default',
      primary: 'primary',
    },
    'default',
  );

  const size = radios(
    'size=',
    {
      small: 'small',
    },
    'small',
  );

  const fullWidth = boolean(
    'fullWidth=',
    false,
  );

  return (
    <Button
      variant={variant}
      colorType={colorType}
      size={size}
      fullWidth={fullWidth}
    >
      按钮
    </Button>
  );
};
