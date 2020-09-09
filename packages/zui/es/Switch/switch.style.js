import { createUseStyles } from 'react-jss';
import color from 'color';

const useSwitchStyles = createUseStyles({
  root: {
    position: 'relative',
    display: 'inline-block',
    width: theme => theme.switch.width,
    height: theme => theme.switch.height,
    borderRadius: theme => (theme.switch.height / 2),
    background: theme => theme.switch.uncheckedBackgroundColor,
    transition: [{
      property: 'background',
      duration: 0.3,
    }, {
      property: 'box-shadow',
      duration: 0.3,
    }],

    '&:focus-within': {
      boxShadow: theme => `0 0 8px ${theme.switch.uncheckedBackgroundColor}`,
    },

    '&$on': {
      background: theme => theme.palette.primary,

      '&:focus-within': {
        boxShadow: theme => `0 0 8px ${theme.palette.primary}`,
      },
    },

    '& input': {
      position: 'absolute',
      zIndex: 3,
      margin: 0,
      height: '100%',
      width: '100%',
      opacity: 0,
    },
  },

  on: {},

  disabled: {
    '& $mask': {
      display: 'block',
    }
  },

  control: {
    position: 'absolute',
    zIndex: 1,
    top: theme => (
      (theme.switch.height - theme.switch.controlSize) / 2
    ),
    left: theme => (
      (theme.switch.height - theme.switch.controlSize) / 2
    ),
    width: theme => theme.switch.controlSize,
    height: theme => theme.switch.controlSize,
    borderRadius: theme => (theme.switch.controlSize / 2),
    backgroundColor: 'white',
    transition: 'left ease 0.2s',

    '$root$on &': {
      left: theme => (
        theme.switch.width
        - theme.switch.controlSize
        - (theme.switch.height - theme.switch.controlSize) / 2
      ),
    },
  },

  mask: {
    display: 'none',
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: theme => (theme.switch.height / 2),
    backgroundColor: (
      color('white')
      .alpha(0.7)
      .toString()
    ),
    pointerEvents: 'none',
  }
});

export { useSwitchStyles };