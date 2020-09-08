import React from 'react';
import { useControlled } from '@uniz/react-hooks';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useZuiTheme } from '../theme';
import { useSwitchStyles } from './switch.style';

Switch.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  defaultChecked: false,
};

Switch.displayName = 'Switch';

function Switch(props) {
  const {
    className,
    disabled,
    onChange,
  } = props;

  const {
    value,
    setValueIfUncontrolled,
  } = useControlled({
    props,
    propName: 'checked',
  });

  const theme = useZuiTheme();

  const classes = useSwitchStyles(theme);

  return (
    <label className={classNames(
      classes.root,
      {
        [classes.on]: value,
        [classes.disabled]: disabled,
      },
      className,
    )}>
      <div className={classes.mask} />

      <div
        className={classes.control}
      />
      <input
        type="checkbox"
        checked={value}
        onChange={onChangeClient}
        disabled={disabled}
      />
    </label>
  );

  function onChangeClient(evt) {
    setValueIfUncontrolled(evt.target.checked);

    if (onChange) {
      onChange(evt);
    }
  }
}

export default Switch;