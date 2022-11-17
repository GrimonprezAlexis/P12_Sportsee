import ChartAverageSessions from './ChartAverageSessions';
import ChartPerformance from './ChartPerformance';
import ChartScore from './ChartScore';
import PropTypes from 'prop-types'; 

const UserBottomCharts = ({ data }) => {
    return(
        <div className='chartsContainer'>
            <ChartAverageSessions />
            <ChartPerformance />
            <ChartScore data={data}/>
        </div>
    );
};
export default UserBottomCharts;

UserBottomCharts.propTypes = {
data: PropTypes.object
}