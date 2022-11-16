import styled from 'styled-components';
import ChartAverageSessions from './ChartAverageSessions';
import ChartPerformance from './ChartPerformance';
import ChartScore from './ChartScore';

const StyledChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap:1rem;
  justify-content: space-between;
`;

const UserBottomCharts = () => {
    return(
        <StyledChartsContainer>
            <ChartAverageSessions />
            <ChartPerformance />
            <ChartScore />
        </StyledChartsContainer>
    );
};
export default UserBottomCharts;