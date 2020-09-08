import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useZuiTheme } from '../theme';
import { useToastContainerStyles } from './toastContainer.style';
import classnames from 'classnames';
import ToastItem from './ToastItem';

ToastContainer.propTypes = {
  method: PropTypes.oneOf(['fixed']),
  toastMap: PropTypes.objectOf(
    PropTypes.shape({
      message: PropTypes.any,
      option: PropTypes.shape({
        disappearTime: PropTypes.number,
      }),
    }),
  ),
};

ToastContainer.defaultProps = {
  method: 'fixed',
};

ToastContainer.displayName = 'ToastContainer';

function ToastContainer(props) {
  const {
    method,
    toastMap,
  } = props;

  const theme = useZuiTheme();
  const classes = useToastContainerStyles(theme);

  return (
    <div
      className={classnames(
        classes.root,
        {
          [classes.fixed]: method === 'fixed',
          [classes.relative]: method === 'relative',
        }
      )}
    >
      {props.children}

      <div
        className={classnames(
          classes.toastContainer
        )}
      >
        <div
          className={
            classes.centerBox
          }
        >
          {(
            Object
            .values(toastMap)
            .map(toast => (
              <ToastItem
                key={toast.id}
                message={toast.message}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ToastContainer;