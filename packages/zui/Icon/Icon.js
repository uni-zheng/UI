import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useZuiTheme } from '../theme';
import { useIconStyles } from './icon.style';

// 更新 iconfont 代码时，对于单色图标希望通过 color 来自定义颜色的，
// 一定要在 iconfont.cn 上进行批量操作 -> 批量去色的操作
Icon.propTypes = {
  className: PropTypes.string,
  svg: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  rotate: PropTypes.number,
};

function Icon(props) {
  const {
    className,
    svg,
    color,
    size,
    rotate = 0,
  } = props;

  const theme = useZuiTheme();
  const classes = useIconStyles(theme);

  const __html = svg
  const [useTransition, setTransitionStatus] = useState(false);

  useEffect(() => {
    // 渲染完成之后再开启动画
    setTransitionStatus(true);
  }, []);

  return (
    <i
      aria-hidden="true"
      className={classNames(
        classes.root,
        className,
      )}
      style={{
        fontSize: `${size}px`,
      }}
    >
      <svg
        className={classNames(
          classes.svg,
          {
            [classes.useTransition]: useTransition,
          },
        )}
        style={{
          color,
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <svg dangerouslySetInnerHTML={{ __html }} />
      </svg>
    </i>
  );
}

export default Icon;
