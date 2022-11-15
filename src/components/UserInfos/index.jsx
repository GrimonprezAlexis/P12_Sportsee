import PropTypes from 'prop-types'; 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUserInfos } from '../../services/userService';
import './index.scss'

const UserInfos = () => {
    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const getData = async () => {
			const request = await getUserInfos(id);
			if (!request) return alert('data error');
			setData(request.data);
		};
		getData();
	}, [id]);

	if (data.length === 0) return null;

    return (  
        <>
        <div className="col10 mt-5rem">
            <span className="userInfo__title black">Bonjour <span className="userInfo__title red">{data.userInfos?.firstName}</span></span>
            <p className="userInfo__title__sub mt-2rem">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        </>
    );
}

export default UserInfos;

UserInfos.propTypes = {
	name: PropTypes.string,
};