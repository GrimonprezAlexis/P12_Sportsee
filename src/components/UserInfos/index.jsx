import './index.scss';
import PropTypes from 'prop-types';

const UserInfos = ({ data }) => {
    return (  
        <div className="userInfo">
            <h1 className="userInfo__title black">Bonjour <span className="userInfo__title red">{data.userInfos?.firstName}</span></h1>
            <p className="userInfo__title__sub mt-2rem">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};
export default UserInfos;

UserInfos.propTypes = {
	data: PropTypes.object,
};