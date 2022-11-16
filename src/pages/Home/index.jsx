import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../../css/main.scss';

const HomeWrapper = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
`;
const StyledTitle = styled.h2`
    font-weight: bold;
    font-size: 24px;
`;

const StyledText = styled.p`
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
`;

const StyledNavContainer = styled.nav`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const users = [12, 18];

  return (
    <HomeWrapper>
      <StyledTitle>Users List</StyledTitle>
      <StyledText>Select user link</StyledText>
      <StyledNavContainer>
        {users.map((user, index) => <NavLink key={index} to={`/users/${user}`}>- User {user}</NavLink> )}
      </StyledNavContainer>
    </HomeWrapper>
  );
};

export default Home;


