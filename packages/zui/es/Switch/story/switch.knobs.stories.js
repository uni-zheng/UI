import React from 'react';
import Switch from '../Switch';
import { boolean } from '@storybook/addon-knobs';

export const SwitchWithKnobs = () => {

  const checked = boolean(
    'checked=',
    false,
  )

  const disabled = boolean(
    'disabled=',
    false,
  )

  return (
    <Switch
      checked={checked}
      disabled={disabled}
    />
  )
}