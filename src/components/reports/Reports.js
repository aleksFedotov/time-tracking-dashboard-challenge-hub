import React from 'react';
import styled from 'styled-components';

import data from '../../data.json';

import Report from './report/Report';

const ReportsContainer = styled.div``;

const Reports = () => {
  return (
    <>
      {data.map((item) => (
        <Report key={item.title} activity={item} />
      ))}
    </>
  );
};

export default Reports;
