import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import avatarImg from '../../images/image-jeremy.png';
import DashBoardContext from '../../context/context';

const ProfileContainer = styled.div`
  max-width: 25.5rem;
`;

const UserInfo = styled.div`
  padding: 3.4rem 2.9rem;
  background-color: var(--blue);
  border-radius: 2rem;
  min-height: 35.5rem;
  position: relative;
  z-index: 2;
`;

const Avatar = styled.img`
  border-radius: 50%;
  border: 4px solid white;
  width: 8.4rem;
  height: 8.4rem;
  margin-bottom: 4rem;
`;

const Header = styled.p`
  color: var(--pale-blue);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const UserName = styled.h1`
  font-weight: 300;
  color: #fff;
`;

const Contorollers = styled.div`
  padding: 6.7rem 2.9rem 3.5rem 2.9rem;
  background-color: var(--dark-blue);
  border-radius: 2rem;
  min-height: 20rem;
  margin-top: -4rem;
  z-index: 1;
`;

const ListCont = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Contoroller = styled.li`
  color: var(--pale-blue);
  font-weight: 300;
  cursor: pointer;
  transition: all ease 0.5s;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #fff;
  }
`;

const timePeriods = ['Daily', 'Weekly', 'Monthly'];

const ProfileCard = () => {
  const DashboardCtx = useContext(DashBoardContext);

  const { period, changePeriod } = DashboardCtx;

  const periodHandler = (e) => {
    changePeriod(e.target.innerText);
  };

  return (
    <ProfileContainer>
      <UserInfo>
        <Avatar src={avatarImg} alt="avatar" />
        <Header>Report for</Header>
        <UserName>Jeremy Robson</UserName>
      </UserInfo>
      <Contorollers>
        <ListCont>
          {timePeriods.map((per) => (
            <Contoroller
              key={per}
              className={period === per && 'active'}
              onClick={periodHandler}
            >
              {per}
            </Contoroller>
          ))}
        </ListCont>
      </Contorollers>
    </ProfileContainer>
  );
};

export default ProfileCard;