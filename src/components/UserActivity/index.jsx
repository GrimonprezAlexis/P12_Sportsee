
import './index.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserActivity } from "../../services/userService";

import ChartActivity from "./ChartActivity";
import LegendContainer from './LegendActivity';

const UserActivity = () => {
    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const getData = async () => {
			const request = await getUserActivity(id);
			if (!request) return alert('request error');
			setData(request.data.sessions);
		};
		getData();
	}, [id]);
	if (data.length === 0) return null;

    return(
        <section className="activity">
			<header className="activity__header">
				<h2 className="activity__title">Activité quotidienne</h2>
				<LegendContainer />
			</header>
            <ChartActivity data={data}/>
        </section>
    );
};
export default UserActivity;