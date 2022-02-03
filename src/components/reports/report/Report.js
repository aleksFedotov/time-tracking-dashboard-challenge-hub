import React from 'react';

import styled from 'styled-components';

const ReportContainer = styled.div`
  position: relative;
  width: 25.5rem;
  height: 24.4rem;
  background-color: ${(props) => `var(--${props.title})`};
  border-radius: 1rem;
  background-image: url('${(props) => props.imgSrc}');
  background-position: top -10px right 20px;
  background-repeat: no-repeat;
`;

const Report = (props) => {
  const { title, timeframes } = props.activity;

  const imgSrc = `../../../images/icon-${title
    .replace(/\s/g, '-')
    .toLowerCase()}.svg`;

  return (
    <ReportContainer title={title.replace(/\s/g, '')} imgSrc={imgSrc}>
      <img src="../../../images/icon-work.svg" alt="" />
    </ReportContainer>
  );
};

export default Report;
