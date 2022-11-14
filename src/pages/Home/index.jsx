import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HomeWrapper = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
`
const StyledTitle = styled.h2`
    font-weight: bold;
    font-size: 24px;
`

const StyledText = styled.p`
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
`

const StyledNavContainer = styled.nav`
  padding: 30px;
  display: flex;
  flex-direction: column;
`

const UserLink = (props) => {
  return <NavLink to={`/users/${props.userId}`}>- User {props.userId}</NavLink>
}

const UserIdsLink = () => {
  const users = [12, 18];
  return (
    <StyledNavContainer>{users.map((user) => <UserLink userId={user} />)}</StyledNavContainer>
  )
}


const Home = () => {
  return (
    <HomeWrapper>
      <StyledTitle>Users List</StyledTitle>
      <StyledText>Select user link</StyledText>
      <UserIdsLink />
    </HomeWrapper>
  )
}
export default Home


