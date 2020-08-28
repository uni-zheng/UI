import { createUseStyles } from 'react-jss';

const useTextInputStyles = createUseStyles({
  root: {
    position: 'relative',
    margin: 0,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  },

  input: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    border: 'none',
    padding: [0, 12],
    color: '#333333',
    fontSize: 14,
    backgroundColor: 'white',
    borderRadius: 8,

    '&::placeholder': {
      color: '#BBBBBB',
      fontSize: 14,
    },

    '&:focus': {
      outline: 'none',
    },

    '&:disabled': {
      backgroundColor: 'white',
    },
  },

});

export { useTextInputStyles };