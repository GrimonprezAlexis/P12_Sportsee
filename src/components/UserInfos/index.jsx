import './index.scss';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUserInfo = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: center;
    margin-top: 2rem;
`;

const UserInfos = ({ data }) => {
    return (  
        <>
        <StyledUserInfo>
            <h1 className="userInfo__title black">Bonjour <span className="userInfo__title red">{data.userInfos?.firstName}</span></h1>
            <p className="userInfo__title__sub mt-2rem">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </StyledUserInfo>
        </>
    );
};

export default UserInfos;

UserInfos.propTypes = {
	data: PropTypes.object,
};