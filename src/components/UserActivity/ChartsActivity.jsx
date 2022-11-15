import PropTypes from 'prop-types';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ToolTipActivity from './ToolTipActivity';

/**
 * Charts  of user activity (kg, kCal)
 * @param {object} data 
 * @returns {JSX}
 */
const ChartsActivity = ({ data }) => {

    //format data.day (2020-07-01, 2020-07-02) to number (1, 2, 3, ...)
	for (let i = 0 ; i < data.length ; i ++){data[i].day = i + 1;}

    return (
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart 
                data={data} 
                barGap={8} 
                barCategoryGap={1}
            >
                <CartesianGrid 
                    vertical={false} 
                    strokeDasharray="3 3" 
                />
                <XAxis 
                    dataKey="day" 
                    tickLine={false} 
                    tick={{fontSize: 14, stroke:'#9B9EAC'}} 
                    dy={15} 
                />
                <YAxis
                    yAxisId="kilogram"
                    dataKey="kilogram"
                    type="number"
                    domain={['dataMin - 2', 'dataMax + 1']} 
                    tickCount="3" 
                    axisLine={false} 
                    orientation="right"
                    tickLine={false}
                    tick={{fontSize: 14, stroke:'#9B9EAC'}} 
                    dx={15}
                />
                <YAxis 
                    yAxisId="calories" 
                    dataKey="calories" 
                    type="number" 
                    domain={['dataMin - 20', 'dataMax + 10']}  
                    hide={true}
                />

                <Tooltip content={<ToolTipActivity/>}/>
                <Bar 
                    yAxisId="kilogram" 
                    dataKey="kilogram" 
                    fill="#282D30" 
                    barSize={7} 
                    radius={[50, 50, 0, 0]}
                />
                <Bar 
                    yAxisId="calories" 
                    dataKey="calories" 
                    fill="#E60000"
                    barSize={7} 
                    radius={[50, 50, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default ChartsActivity;

ChartsActivity.propTypes = {
    data: PropTypes.object
};