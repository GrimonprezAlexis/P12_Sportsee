import { useState } from 'react';
import { useParams } from 'react-router';

import styled from 'styled-components';
import { mockUserActivity, mockUserAverageSessions, mockUserInfos, mockUserPerformance } from '../../services/userMockService';

const StyledContainer = styled.div`
    margin: 4rem;
`;

const StyledMockContainer = styled.div`
    background-color: #E7E9EB;
    border-radius: 5px;
    padding: 8px 20px;
    margin: 24px -20px;
`;

const StyledTitle = styled.h3`
    margin: 10px 0;    
`;

const StyledMockContent = styled.div`
    border-left: 4px solid #04AA6D;
    font-size: 15px;
    margin: 16px 0;
    width: auto;
    background-color: #fff;
    color: #000;
    padding: 8px 12px;
    border-left: 4px solid #4CAF50;
    word-wrap: break-word;
`;

const StyledButton = styled.div`
    color: #FFFFFF;
    background-color: #04AA6D;
    border-radius: 5px;
    font-size: 17px;
    padding: 6px 18px;
    cursor: pointer;
    margin-bottom: 16px;
`;

const StyledMock = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledResultMock = styled.div`
    background-color: #04AA6D;
    border-radius: 5px;
    padding: 8px 20px;
    margin: 24px -20px;
    border-left: 4px solid red;
`;

const StyledPre = styled.div`
    white-space: pre-wrap;
`;

const MockPage = () => {
    const [activeBtn, setActiveBtn] = useState([false,false,false,false]);

    const [data, setData] = useState([]);
    const {id} = useParams();

    const handleGetUserInfos = async () => {
        const request = await mockUserInfos(id);
        if (!request) return alert('request error');
        setData(JSON.stringify(request.data));
        setActiveBtn([true,false,false,false]);
        window.scrollTo({ top: 0, behavior: "smooth"});
    };
    
    const handleGetUserActivity = async () => {
        const request = await mockUserActivity(id);
        if (!request) return alert('request error');
        setData(JSON.stringify(request.data));
        setActiveBtn([false,true,false,false]);
        window.scrollTo({ top: 0, behavior: "smooth"});  
    };
    const handleGetUserAverageSessions = async () => {
        const request = await mockUserAverageSessions(id);
        if (!request) return alert('request error');
        setData(JSON.stringify(request.data));
        setActiveBtn([false,false,true,false]);
        window.scrollTo({ top: 0, behavior: "smooth"});
    };
    const handleGetUserPerformance = async () => {
        const request = await mockUserPerformance(id);
        if (!request) return alert('request error');
        setData(JSON.stringify(request.data));
        setActiveBtn([false,false,false,true]);
        window.scrollTo({ top: 0, behavior: "smooth"});
    };


    const mocks = [{
        title: "Retrieves information from a user. Includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).",
        url: "/user/:id",
        method: handleGetUserInfos
    }, {
        title: "Retrieves a user's activity day by day with kilograms and calories",
        url: "/user/:id/activity",
        method: handleGetUserActivity
    }, {
        title: "Retrieves the average sessions of a user per day. The week starts on Monday.",
        url: "/user/:id/average-sessions",
        method: handleGetUserAverageSessions
    }, {
        title: "Retrieves a user's performance (energy, endurance, etc.).",
        url: "/user/:id/performance",
        method: handleGetUserPerformance
    }];


    return (
        <StyledContainer className='container'>
            <StyledResultMock className='result'>
                <strong>Result:</strong>
                <StyledPre>{data && data}</StyledPre>
            </StyledResultMock>

            {mocks.map((mock, index) => (
                <StyledMockContainer key={index} className='mockContainer'>
                    <StyledTitle>Request: <pre>{mock.title}</pre></StyledTitle>
                    <StyledMockContent className='mockContent'>
                        <StyledMock key={index}>
                            <code>{mock.url}</code>
                        </StyledMock>
                    </StyledMockContent>

                    <StyledButton onClick={mock.method}  style={{
                        backgroundColor: activeBtn[index] ? 'salmon' : '',
                        color: activeBtn[index] ? 'white' : ''
                    }}
                    >
                        Try it » {activeBtn[index] ? 'ON' : 'OFF'}
                    </StyledButton>

                </StyledMockContainer>
            ))}
        </StyledContainer>
    );
};

export default MockPage;