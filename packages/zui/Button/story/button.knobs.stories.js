import React from 'react';
import Button from '../Button';
import { radios } from '@storybook/addon-knobs';

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

  const displayType = radios(
    'displayType=',
    {
      inline: 'inline',
      block: 'block'
    },
    'inline',
  )

  return (
    <Button
      colorType={colorType}
      size={size}
      displayType={displayType}
    >
      按钮
    </Button>
  );
};
