import React from 'react';
import PropTypes from 'prop-types';
import InputShape from '../../base/InputShape/InputShape';
import { useTextInputStyles } from './textInput.style';
import { useZuiTheme } from '../../theme';
import { useControlled } from '@uniz/react-hooks';

TextInput.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.string,
  onChange: PropTypes.func,
};

TextInput.displayName = 'TextInput';

function TextInput(props) {
  const {
    placeholder,
    onChange,
    disabled,
  } = props;

  const theme = useZuiTheme();
  const classes = useTextInputStyles(theme);

  const {
    value,
    setValueIfUncontrolled,
  } = useControlled({
    props,
  });

  return (
    <InputShape
      isDisabled={disabled}
    >
      <div className={classes.root}>
        <input
          className={classes.input}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChangeClient}
        />
      </div>
    </InputShape>
  );

  function onChangeClient(evt) {
    setValueIfUncontrolled(evt.target.value);

    if (onChange) {
      onChange(evt.target.value, evt);
    }
  }
}

export default TextInput;