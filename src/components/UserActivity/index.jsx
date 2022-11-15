
import './index.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserActivity } from "../../services/userService";

import HeaderActivity from './HeaderActivity';
import ChartsActivity from "./ChartsActivity";

const UserActivity = () => {
    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const getData = async () => {
			const request = await getUserActivity(id);
			if (!request) return alert('data error');
			
			setData(request.data.sessions);
		};
		getData();
	}, [id]);
	if (data.length === 0) return null;

    return(
        <div className="col8 activity">
            <HeaderActivity />
            <ChartsActivity data={data}/>
        </div>
    );
};

export default UserActivity;