import { createUseStyles } from 'react-jss';

const useToastContainerStyles = createUseStyles({
  root: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },

  fixed: {
    '& $toastContainer': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },

  relative: {
    '& $toastContainer': {
      position: 'absolute',
    },
  },

  toastContainer: {
    zIndex: 120,
    pointerEvents: 'none',
  },

  centerBox: {
    position: 'absolute',
    left: '50%',
    bottom: '60%',
    transform: 'translateX(-50%)',
  },
});

export { useToastContainerStyles };