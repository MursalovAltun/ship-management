import { createLogger } from 'redux-logger';

const storeLogger = createLogger({
  duration: true,
  timestamp: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

export default storeLogger;
