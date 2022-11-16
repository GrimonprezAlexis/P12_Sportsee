import styled from 'styled-components';
import ChartAverageSessions from './ChartAverageSessions';
import ChartPerformance from './ChartPerformance';
import ChartScore from './ChartScore';
import PropTypes from 'prop-types'; 

const StyledChartsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
`;

const UserBottomCharts = ({ data }) => {
    return(
        <StyledChartsContainer>
            <ChartAverageSessions />
            <ChartPerformance />
            <ChartScore data={data}/>
        </StyledChartsContainer>
    );
};
export default UserBottomCharts;

UserBottomCharts.propTypes = {
data: PropTypes.object
}