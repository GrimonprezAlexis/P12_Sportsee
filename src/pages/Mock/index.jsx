import { useState } from 'react';
import { useParams } from 'react-router';

import styled from 'styled-components';
import { mockUserActivity, mockUserAverageSessions, mockUserInfos, mockUserPerformance } from '../../services/userMockService';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 5rem;
`;

const StyledTitle = styled.div`
    font-size: 5rem;
`;

const StyledSubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    padding: 3rem;
`;

const StyledMock = styled.div`
    display: flex;
    flex-direction: column;
`

const MockPage = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();

    const handleGetUserInfos = async () => {
        const request = await mockUserInfos(id);
        if (!request) return alert('request error');
        setData(JSON.stringify(request.data));
    };
    const handleGetUserActivity = async () => {
        const request = await mockUserActivity(id);
        if (!request) return alert('request error');
        setData(JSON.stringify(request.data));
    };
    const handleGetUserAverageSessions = async () => {
        const request = await mockUserAverageSessions(id);
        if (!request) return alert('request error');
        setData(JSON.stringify(request.data));
    };
    const handleGetUserPerformance = async () => {
        const request = await mockUserPerformance(id);
        if (!request) return alert('request error');
        setData(JSON.stringify(request.data));
    };

    const MocksContainer = () => {
        const mocks = [{
            title: "Retrieves information from a user. Includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).",
            url: "(/user/:id)",
            label: "#Infos utilisateur",
            method: handleGetUserInfos
        }, {
            title: "Retrieves a user's activity day by day with kilograms and calories",
            url: "/user/:id/activity",
            label: "#Activité quotidienne",
            method: handleGetUserActivity
        }, {
            title: "Retrieves the average sessions of a user per day. The week starts on Monday.",
            url: "/user/:id/average-sessions",
            label: "#Durée sessions",
            method: handleGetUserAverageSessions
        }, {
            title: "Retrieves a user's performance (energy, endurance, etc.).",
            url: "/user/:id/performance",
            label: "#Performances",
            method: handleGetUserPerformance
        }];

        return (
            <StyledSubContainer>
            {mocks.map((mock, index) => <StyledMock key={index}>
                <span>{mock.title}</span>
                <code>{mock.url}</code>
                <button type="button" onClick={mock.method}>{mock.label}</button>
            </StyledMock> )}
            </StyledSubContainer>
        );
    }

    return (
        <>
        <StyledContainer>
            <StyledTitle>Mock API</StyledTitle>
            <MocksContainer/>
            {data && data}
        </StyledContainer>
        </>
    );
};

export default MockPage;