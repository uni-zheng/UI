import { createUseStyles } from 'react-jss';

const useToastItemStyles = createUseStyles({
  root: {
    padding: [8, 12],
    margin: 5,
    transition: 'all 0.2s ease-in',
    backgroundColor: 'rgba(55, 55, 55, 0.5)',
    borderRadius: 4,
    color: 'white',
    fontSize: 12,
    opacity: 1,
    transform: 'scale(1)',
  },
});

export { useToastItemStyles };