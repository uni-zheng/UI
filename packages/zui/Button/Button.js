import _ from 'lodash';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { useClassPrefix } from '../tools/uses/useClassPrefix';

Button.propTypes = {
  classPrefix: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outline', 'text']),
  colorType: PropTypes.oneOf(['', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  displayType: PropTypes.oneOf(['inline', 'block']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  clickOnce: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      onClickWhenProcessing: PropTypes.func,
    }),
  ]),
  children: PropTypes.any,
};

Button.defaultProps = {
  classPrefix: 'zui',
  displayType: 'inline',
  variant: 'contained',
  size: 'middle',
};

function Button(props) {
  const {
    classPrefix,
    className,
    variant,
    size,
    disabled,
    displayType,
    colorType,
    loading: loadingProp,
    onClick,
    clickOnce,
    children,
  } = props;

  const prefixClass = useClassPrefix(classPrefix, 'button');
  const [clickCount, setClickCount] = useState(0);
  const [isClickOnceProcessing, setClickOnceProcessStatus] = useState(false);
  const [isLoading, setLoadStatus] = useState(loadingProp || false);

  if (!isClickOnceProcessing) {
    if (isLoading !== loadingProp) {
      setLoadStatus(loadingProp);
    }
  }

  return (
    <button
      className={classNames(
        prefixClass(),
        colorType && prefixClass(`color-${colorType}`),
        variant && prefixClass(`varient-${variant}`),
        {
          [prefixClass('block')]: displayType === 'block',
          [prefixClass('size-small')]: size === 'small',
          [prefixClass('disabled')]: disabled,
          [prefixClass('loading')]: isLoading,
        },
        className,
      )}
      onClick={onClickClient}
    >
      {isLoading ? (
        <span className={prefixClass('icon-loading')}>
          <Icon id="cc-icon-loading" />
        </span>
      ) : (
        children
      )}
    </button>
  );

  function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  }

  function onClickClient(evt) {
    setClickCount(clickCount + 1);

    if (!onClick) {
      return;
    }

    if (!_.isFunction(onClick)) {
      return console.error(new Error('onClick 接收的必须是函数'));
    }

    if (isLoading) {
      return;
    }

    // 进入 clickOnce 逻辑
    // 检查当前状态
    // if (isClickOnceProcessing) {
    //   _.isFunction(clickOnce?.onClickWhenProcessing) && clickOnce.onClickWhenProcessing();
    //   return;
    // }

    // 获取函数返回值 判断是否为异步函数
    const returnValue = onClick(evt);

    if (isPromise(returnValue)) {
      // 是异步函数，挂起按钮并在异步结束时释放
      setClickOnceProcessStatus(true);
      setLoadStatus(true);

      return returnValue.finally(() => {
        setClickOnceProcessStatus(false);
        setLoadStatus(false);
      });
    }
  }
}

export default Button;
