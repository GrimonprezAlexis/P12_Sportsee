import React from 'react';
import { ResponsiveContainer, PieChart, Pie,Cell } from 'recharts';
import PropTypes from 'prop-types'; 

/** create a PieChart with score value
 * @param  {object} {data}
 * @return {JSX}  
 */
const ChartScore = ({data}) => {
    
    const score = [
        { value: data.todayScore || data.score},
        { value: 1 - data.todayScore || data.score }, 
    ];
    
    return ( 
        <div className="chartScore">
            <h2>Score</h2>
            <ResponsiveContainer width='100%' height='100%'>
                <PieChart >
                <Pie data={score} dataKey="value" innerRadius={70} outerRadius={85} startAngle={90}  >
                {score.map((entry, index) => (
                    index === 0 
                     ?  <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000"/>
                     :  <Cell key={`cell-${index}`} fill="#ffffff"/>
                ))}
                </Pie>
                </PieChart>
            </ResponsiveContainer>
            <p>
                <span>{score[0].value * 100 }%<br/></span>
                de votre<br/> objectif
            </p>
        </div>
     );
}

export default ChartScore;

ChartScore.propTypes = {
data: PropTypes.object
}