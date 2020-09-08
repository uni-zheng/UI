import { createUseStyles } from 'react-jss';
import color from 'color';

const useInputShapeStyles = createUseStyles({
  root: {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'inline-flex',
    height: 32,
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'white',

    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 2,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 8,
      border: 'solid 1px #979797',
      pointerEvents: 'none',
    },
  },

  childrenBox: {
    flex: {
      grow: 1,
      shrink: 1,
      basis: 'auto',
    },
    overflow: 'hidden',
  },

  'suffix-box': {
    flex: {
      grow: 0,
      shrink: 0,
      basis: 'auto',
    },
    display: 'flex',
    padding: 4,

    '&:empty': {
      display: 'none'
    }
  },

  mask: {
    position: 'absolute',
    zIndex: 4,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    borderRadius: 8,
  },

  disabled: {
    '& $mask': {
      backgroundColor: (
        color('white')
        .alpha(0.7)
        .toString()
      ),
    }
  }
});

export { useInputShapeStyles };