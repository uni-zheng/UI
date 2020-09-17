import { createUseStyles } from 'react-jss';
import color from 'color';
import { defaultZuiThemeContext } from '../theme';

const useButtonStyles = createUseStyles({
  root: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    appearance: 'none',
    padding: theme => (`0 ${theme.button.horizontalPadding}px`),
    minWidth: theme => theme.button.minWidth,
    height: theme => theme.button.height,
    borderRadius: theme => theme.button.borderRadius,
    fontSize: theme => theme.button.fontSize,
    cursor: 'pointer',
    fontWeight: 'normal',
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: '-apple-system',

    '&$full-width': {
      display: 'flex',
      width: '100%',
    },

    '& + &': {
      marginLeft: 8,
    },
  },

  'full-width': {},

  mask: {
    position: 'absolute',
    zIndex: 4,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },

  'color-type-primary': {},

  'variant-contained': {
    backgroundColor: theme => theme.button.themeColor,

    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      borderRadius: theme => theme.button.borderRadius,
      transition: 'background-color 0.2s ease',
    },

    '&:hover': {
      '&:before': {
        backgroundColor: (
          color('white')
          .alpha(0.15)
          .toString()
        ),
      },
    },

    '&:focus': {
      // TODO  等待 :focus-visible 伪类
      // boxShadow: theme => {
      //   const colorString = (
      //     color(theme.button.themeColor)
      //     .alpha(0.8)
      //     .toString()
      //   );
      //   return `0 0 8px ${colorString}`;
      // },
    },

    '&&:active': {
      '&:before': {
        backgroundColor: (
          color('#5C5C5C')
          .alpha(0.2)
          .toString()
        ),
      },
    },

    '&$color-type-primary': {
      backgroundColor: theme => theme.palette.primary,
    },
  },

  'variant-outline': {
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: theme => theme.button.borderRadius,
      pointerEvents: 'none',
      backgroundColor: theme => theme.button.themeColor,
      opacity: 0,
      transition: 'opacity 0.2s ease',
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      zIndex: 2,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: 'solid 1px #9E9E9E',
      borderRadius: theme => theme.button.borderRadius,
      pointerEvents: 'none',
    },

    '&:hover': {
      '&:before': {
        opacity: 0.1,
      },
    },

    '&&:active': {
      '&:before': {
        opacity: 0.25,
      },
    },

    '&$color-type-primary': {
      '&:before': {
        backgroundColor: theme => theme.palette.primary,
      },
      '&:after': {
        borderColor: theme => theme.palette.primary,
      },
      '& $content': {
        color: theme => theme.palette.primary,
      },
    },

    '& $content': {
      color: theme => theme.button.themeColor,
    },
  },

  'variant-text': {
    '&$root': {
      minWidth: '0',
    },

    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: theme => theme.button.borderRadius,
      pointerEvents: 'none',
      backgroundColor: theme => theme.button.themeColor,
      opacity: 0,
      transition: 'opacity 0.2s ease',
    },

    '&:hover': {
      '&:before': {
        opacity: 0.1,
      },
    },

    '&&:active': {
      '&:before': {
        opacity: 0.25,
      },
    },

    '&$color-type-primary': {
      '&:before': {
        backgroundColor: theme => theme.palette.primary,
      },
      '&:after': {
        borderColor: theme => theme.palette.primary,
      },
      '& $content': {
        color: theme => theme.palette.primary,
      },
    },

    '& $content': {
      color: theme => theme.button.themeColor,
    },
  },

  content: {
    position: 'relative',
    zIndex: 3,
    color: 'white',
  },

  disabled: {
    '&$root': {
      cursor: 'not-allowed',
    },

    '& $mask': {
      backgroundColor: (
        color('white')
        .alpha(0.7)
        .toString()
      ),
    },
  },
}, {
  theming: defaultZuiThemeContext,
});

export { useButtonStyles };