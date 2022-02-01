import { createContext } from 'react';

const DashBoardContext = createContext({
  period: '',
  setPeriod: () => {},
});

export default DashBoardContext;
