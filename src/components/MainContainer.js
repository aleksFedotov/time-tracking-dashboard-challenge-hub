import React from 'react';

import styled from 'styled-components';
import ProfileCard from './porfileCard/ProfileCard';

import data from '../data.json';

import Report from './reports/Report';

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'profile Work Play Study' 'profile Exercise Social SelfCare';
  max-width: 110rem;
  width: 100%;
  gap: 3rem;
  flex: 1;
  @media (max-width: 900px) {
    max-width: 70rem;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 225px 225px 225px;
    grid-template-areas: 'profile profile' 'Work Play' ' Study Exercise' 'Social SelfCare';
    gap: 2rem;
  }

  @media (max-width: 600px) {
    min-width: 300px;
    max-width: 400px;
    /* display: flex;
    flex-direction: column; */
    grid-template-columns: 1fr;
    grid-template-rows: 1fr repeat(6, 165px);
    grid-template-areas: 'profile' 'Work' 'Play' 'Study' 'Exercise' 'Social' 'SelfCare';
  }
`;

const MainContainer = () => {
  return (
    <Container>
      <ProfileCard />
      {data.map((item) => (
        <Report key={item.title} activity={item} />
      ))}
    </Container>
  );
};

export default MainContainer;
