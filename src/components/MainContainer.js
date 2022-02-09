import React from 'react';

import styled from 'styled-components';
import ProfileCard from './porfileCard/ProfileCard';
import Reports from './reports/Reports';

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'profile Work Play Study' 'profile Exercise Social SelfCare';
  max-width: 110rem;
  width: 100%;
  gap: 3rem;

  @media (max-width: 900px) {
    max-width: 70rem;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'profile profile' 'Work Play' ' Study Exercise' 'Social SelfCare';
    gap: 2rem;
  }
`;

const MainContainer = () => {
  return (
    <Container>
      <ProfileCard />
      <Reports />
    </Container>
  );
};

export default MainContainer;
