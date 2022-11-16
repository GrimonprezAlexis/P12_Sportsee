
import './index.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserActivity } from "../../services/userService";

import HeaderActivity from './HeaderActivity';
import ChartActivity from "./ChartActivity";

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
            <ChartActivity data={data}/>
        </div>
    );
};

export default UserActivity;