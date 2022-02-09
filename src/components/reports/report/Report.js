import React, { useContext } from 'react';

import styled from 'styled-components';
import DashBoardContext from '../../../context/context';
import eclipseImg from '../../../images/icon-ellipsis.svg';

const ReportContainer = styled.div`
  position: relative;
  height: 30rem;
  color: #fff;
  grid-area: ${(props) => `${props.title}`};
`;

const Background = styled.div`
  height: 10rem;
  background-color: ${(props) => `var(--${props.title})`};
  border-radius: 1.5rem;
  background-image: url('${(props) => props.imgSrc}');
  background-position: top 0 right 20px;
  background-repeat: no-repeat;

  margin-bottom: -5.5rem;

  &.Work,
  &.Play,
  &.Study,
  &.SelfCare {
    background-position: top -10px right 20px;
  }
  &.Social {
    background-position: top -15px right 20px;
  }
`;

const ReportContext = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  background-color: var(--dark-blue);
  border-radius: 1.5rem;
  transition: all 0.5s ease;
  cursor: pointer;
  padding: 3rem;
  bottom: 0;

  &:hover {
    background-color: #34397b;
    height: 90%;
    transition: all 0.5s ease;
  }
`;

const ContextHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.8rem;
    font-weight: 400;
  }

  div:hover img {
    filter: brightness(0) invert(1);
  }
`;

const CurrentHours = styled.h3`
  font-size: 5.6rem;
  font-weight: 300;
  margin-top: 3rem;
`;

const PreviousHours = styled.p`
  color: var(--pale-blue);
  font-size: 1.4rem;
  margin-top: 1.2rem;
`;

const Report = (props) => {
  const { title, timeframes } = props.activity;
  const DashboardCtx = useContext(DashBoardContext);

  const chosenPeriod = DashboardCtx.period.toLowerCase();

  const imgSrc = require(`../../../images/icon-${title
    .replace(/\s/g, '-')
    .toLowerCase()}.svg`);

  const activity = title.replace(/\s/g, '');

  let last = 'Last Week';

  if (chosenPeriod === 'daily') {
    last = 'Yesterday';
  } else if (chosenPeriod === 'monthly') {
    last = 'Last Month';
  }

  return (
    <ReportContainer title={activity} aria-label="report">
      <Background imgSrc={imgSrc} className={activity} title={activity} />
      <ReportContext>
        <ContextHeader>
          <h2>{title}</h2>
          <div>
            <img src={eclipseImg} alt="menu" />
          </div>
        </ContextHeader>
        <CurrentHours>{`${timeframes[chosenPeriod].current}hrs`}</CurrentHours>
        <PreviousHours>
          {`${last} - ${timeframes[chosenPeriod].previous}hrs`}
        </PreviousHours>
      </ReportContext>
    </ReportContainer>
  );
};

export default Report;
