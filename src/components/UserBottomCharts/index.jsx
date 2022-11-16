import styled from 'styled-components';
import ChartAverageSessions from './ChartAverageSessions';
import ChartPerformance from './ChartPerformance';
import ChartScore from './ChartScore';
import PropTypes from 'prop-types'; 

const StyledChartsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;

    @media screen and (min-width: 450px) and (max-width:992px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 6rem;
    }

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