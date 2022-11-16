import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import {
	Line, LineChart, ResponsiveContainer, Tooltip, XAxis,
	YAxis
} from "recharts";

import { getUserAverageSessions } from '../../services/userService';
import AverageToolType from './AverageTooltype';


/**
 * Render a LineChart with user average sessions Data
 * @return {JSX}
 */
const ChartAverageSessions = () => {
    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const getData = async () => {
			const request = await getUserAverageSessions(id);
			if (!request) return alert('request error');
			const formatData = request.data.sessions.map((data) => {
				switch (data.day) {
					case 1:
						return { ...data, day: 'L' };
					case 2:
						return { ...data, day: 'M' };
					case 3:
						return { ...data, day: 'M' };
					case 4:
						return { ...data, day: 'J' };
					case 5:
						return { ...data, day: 'V' };
					case 6:
						return { ...data, day: 'S' };
					case 7:
						return { ...data, day: 'D' };
					default:
						return {...data };
				}
			});
			setData(formatData);
		};
		getData();
	}, [id]);
	if (data.length === 0) return null;
	
    return (
        <div className="averageSession">
            <h2>Durée moyenne des <br></br>sessions</h2>
            <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data} >
                <XAxis type="category"  dataKey="day" tickLine={false} tick={{fontSize: 14, stroke:'rgba(255, 255, 255, 0.7)'}} />
                <YAxis dataKey="sessionLength" domain={[0, 'dataMax + 30']} hide={true}/>
                <Tooltip content={<AverageToolType/>}/>
                <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.7)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke:'white' }}/>
            </LineChart>
            </ResponsiveContainer>
        </div>
      );
};

export default ChartAverageSessions;

