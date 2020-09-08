import React from 'react';
import PropTypes from 'prop-types';
import { useZuiTheme } from '../theme';
import { useToastItemStyles } from './toastItem.style';

ToastItem.propTypes = {
  message: PropTypes.any,
};

ToastItem.displayName = 'ToastItem';

function ToastItem(props) {
  const {
    message,
  } = props;

  const theme = useZuiTheme();
  const classes = useToastItemStyles(theme)

  return (
    <div
      className={classes.root}
    >
      {message}
    </div>
  );
}

export default ToastItem;