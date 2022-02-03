import { useState } from 'react';

import DashBoardContext from './context';

const DashBoardProvider = (props) => {
  const [period, setPeriod] = useState('Weekly');
  const changePeriod = (data) => {
    setPeriod(data);
  };

  const context = {
    period,
    changePeriod,
  };
  return (
    <DashBoardContext.Provider value={context}>
      {props.children}
    </DashBoardContext.Provider>
  );
};

export default DashBoardProvider;
