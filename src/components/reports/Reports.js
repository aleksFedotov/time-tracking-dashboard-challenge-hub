import React from 'react';
import styled from 'styled-components';

import data from '../../data.json';

import Report from './report/Report';

const ReportsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;
`;

const Reports = () => {
  return (
    <ReportsContainer>
      {data.map((item) => (
        <Report key={item.title} activity={item} />
      ))}
    </ReportsContainer>
  );
};

export default Reports;
