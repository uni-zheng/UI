import React from 'react';
import TextInput from '../TextInput';
import { boolean, text } from '@storybook/addon-knobs';

export const TextInputWithKnobs = () => {

  const placeholder = text(
    'placeholder=',
    '请输入内容',
  );

  const value = text(
    'value=',
    'uni-zheng',
  );

  const disabled = boolean(
    'disabled=',
    false,
  );

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      disabled={disabled}
    />
  );
};