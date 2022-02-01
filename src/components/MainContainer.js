import React from 'react';

import styled from 'styled-components';
import ProfileCard from './porfileCard/ProfileCard';

const Container = styled.main`
  display: flex;
`;

const MainContainer = () => {
  return (
    <Container>
      <ProfileCard />
    </Container>
  );
};

export default MainContainer;
