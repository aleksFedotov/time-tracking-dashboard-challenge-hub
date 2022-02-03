import React from 'react';

import styled from 'styled-components';
import ProfileCard from './porfileCard/ProfileCard';
import Reports from './reports/Reports';

const Container = styled.main`
  display: flex;
  max-width: 110rem;
  gap: 3rem;
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
