import { createUseStyles } from 'react-jss';

const useIconStyles = createUseStyles({
  root: {
    display: 'inline-flex',
    fontSize: 14,
    lineHeight: 1,
  },

  svg: {
    width: '1em',
    height: '1em',
    fontSize: 'inherit',
    verticalAlign: '-0.15em',
    overflow: 'hidden',
    fill: 'currentcolor',

    '&$useTransition': {
      transition: 'all 0.3s',
    },
  },

  useTransition: {},
});

export { useIconStyles };