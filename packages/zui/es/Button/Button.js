import _ from 'lodash';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useButtonStyles } from './button.style';
import { useZuiTheme } from '../theme';

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outline', 'text']),
  colorType: PropTypes.oneOf(['default', 'primary']),
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  displayType: PropTypes.oneOf(['inline', 'block']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

Button.defaultProps = {
  variant: 'contained',
  colorType: 'default',
  size: 'middle',
  displayType: 'inline',
};

function Button(props) {
  const {
    className,
    variant,
    size,
    disabled,
    displayType,
    colorType,
    onClick,
    children,
  } = props;

  const theme = useZuiTheme();

  const classes = useButtonStyles(theme);

  const [clickCount, setClickCount] = useState(0);

  return (
    <button
      className={classNames(
        classes.root,
        variant && [classes[`variant-${variant}`]],
        colorType && [classes[`color-type-${colorType}`]],
        disabled && classes.disabled,
        className,
      )}
      onClick={onClickClient}
      disabled={disabled}
    >
      <span className={classes.mask} />

      <span className={classes.content}>
        {children}
      </span>
    </button>
  );

  function onClickClient(evt) {
    setClickCount(clickCount + 1);

    if (!onClick) {
      return;
    }

    if (!_.isFunction(onClick)) {
      return console.error(new Error('onClick 接收的必须是函数'));
    }

    onClick(evt);
  }
}

export default Button;
