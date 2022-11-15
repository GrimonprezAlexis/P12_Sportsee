import styled from 'styled-components';

import UserActivity from "../../components/UserActivity";
import UserInfos from "../../components/UserInfos";

const StyledMain = styled.main`
  margin-left: 10rem;
`

const User = () => {
  return (
    <StyledMain>
      <UserInfos />
      <div className="mt-2rem"></div>

      <section className='col12 flex'>
        <UserActivity />
        <div className='col4'>
          <p>test</p>
        </div>
      </section>
    </StyledMain>
  )
}

export default User
