import React, {useState,useEffect} from 'react';
import { getUserPerformance } from '../../services/userService';
import { useParams } from 'react-router';
import {Radar,RadarChart,PolarGrid,PolarAngleAxis,ResponsiveContainer} from "recharts";

/**
 * Render a RadarChart with user performance data
 * @return {JSX}
 */

const ChartPerformance = () => {
    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const getData = async () => {
			const request = await getUserPerformance(id);
			if (!request) return alert('request error');
			const formatData = request.data.data.map((data) => {
				switch (data.kind) {
					case 1:
						return { ...data, kind: 'Cardio' };
					case 2:
						return { ...data, kind: 'Energie' };
					case 3:
						return { ...data, kind: 'Endurance' };
					case 4:
						return { ...data, kind: 'Force' };
					case 5:
						return { ...data, kind: 'Vitesse' };
					case 6:
						return { ...data, kind: 'Intensité' };
					default:
						return {...data };
				}
			});
			setData(formatData);
		};
		getData();
	}, [id]);
	if (data.length === 0) return null;
	
	//console.log(data)

    return ( 
		<div className="chartPerformance">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}>
						<PolarGrid gridType="polygon" />
						<PolarAngleAxis	dataKey="kind" stroke='white' tickLine={false} axisLine={false}  tick={{ fontSize: 10 }}/>
						<Radar dataKey='value' stroke='#FF0101'	fill='#FF0101' fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</div> 
	);
}

export default ChartPerformance;