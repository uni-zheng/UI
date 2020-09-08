import React from 'react';
import PropTypes from 'prop-types';
import { useInputShapeStyles } from './inputShape.style';
import { useZuiTheme } from '../../theme';
import classnames from 'classnames';
import { useCombineClasses } from '../../uses/useCombineClasses';

InputShape.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  suffix: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ])),
  addonAfter: PropTypes.any,
  isDisabled: PropTypes.bool,
  isFocus: PropTypes.bool,
  children: PropTypes.any,
};

InputShape.displayName = 'InputShape';

function InputShape(props) {
  const {
    className,
    classes: classesProps,
    suffix,
    addonAfter,
    isDisabled,
    isFocus,
    children,
  } = props;

  const theme = useZuiTheme();
  const inputShapeStyles = useInputShapeStyles(theme);
  const classes = useCombineClasses(classesProps, inputShapeStyles);

  return (
    <div
      className={classnames(
        classes.root,
        {
          [classes.focused]: isFocus,
          [classes.disabled]: isDisabled,
        },
        className,
      )}
    >
      <div className={classes.mask} />

      <div className={classes.childrenBox}>
        {children}
      </div>

      <div className={classes['suffix-box']}>
        {suffix && suffix.map((item, index) => (
          <div
            key={index}
            className={classes['suffix-item']}
          >
            {item}
          </div>
        ))}
      </div>

      {addonAfter && (
        <div className={classes['addon-after-box']}>
          <div className={classes['addon-after-item']}>
            {addonAfter}
          </div>
        </div>
      )}
    </div>
  );
}

export default InputShape;