import React, { useContext } from 'react';
import styled from 'styled-components';
import avatarImg from '../../images/image-jeremy.png';
import DashBoardContext from '../../context/context';

const ProfileContainer = styled.div`
  grid-area: profile;
  background-color: var(--dark-blue);
  border-radius: 1.5rem;
  overflow: hidden;

  @media (max-width: 900px) {
  }
`;

const UserInfo = styled.div`
  padding: 3.4rem 2.9rem 7.4rem 2.9rem;
  background-color: var(--blue);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    gap: 1.8rem;
    padding: 3rem 2.5rem;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  border: 4px solid white;
  width: 8.4rem;
  height: 8.4rem;
  @media (max-width: 600px) {
    width: 7.2rem;
    height: 7.2rem;
  }
`;

const Header = styled.p`
  color: var(--pale-blue);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

const UserName = styled.h1`
  font-weight: 300;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 2.4rem;
  }
`;

const Contorollers = styled.div`
  padding: 3rem 3rem 3.5rem 3rem;
  background-color: var(--dark-blue);
  border-radius: 1.5rem;

  @media (max-width: 600px) {
    padding: 2.5rem 3rem 2.5rem 3rem;
  }
`;

const ListCont = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
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
        <div>
          <Header>Report for</Header>
          <UserName>Jeremy Robson</UserName>
        </div>
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
