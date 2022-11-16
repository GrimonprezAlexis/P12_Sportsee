import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import styled from 'styled-components';

import KeyData from '../../components/KeyData';
import UserActivity from "../../components/UserActivity";
import UserBottomCharts from '../../components/UserBottomCharts';
import UserInfos from "../../components/UserInfos";

import { getUserInfos } from '../../services/userService';

const StyledMain = styled.main`
  display: grid;
  justify-content: space-between;
    
  @media screen and (min-width: 992px){
    margin-left: 10rem;
  }

`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  grid-row-gap: 0px;

  @media screen and (max-width: 1290px){
    grid-template-columns: 3fr;
    grid-row-gap: 3rem;
  }
`;

const StyledChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 3rem;
`;

const StyledIconActivityContainer = styled.aside`
    display: grid;
    grid-template-rows: repeat(4,1fr);
    grid-column-gap: 0px;
    grid-row-gap: 3rem;
    margin-left: 2rem;

    @media screen and (max-width: 1290px){
      flex-direction: row;
      margin: auto 0;
      margin-right: 6em;

    }

`;


const User = () => {
  const pathPublic = `${window.location.origin}`;
  const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const getData = async () => {
			const request = await getUserInfos(id);
			if (!request) return alert('data error');
			setData(request.data);
		};
		getData();
	}, [id]);

	if (data.length === 0) return null;
  console.log('data', data);

  return (
    <StyledMain>
      <UserInfos data={data} />

      <StyledContent>
        <StyledChartsContainer>
          <UserActivity />
          <UserBottomCharts data={data}/>
        </StyledChartsContainer>

        <StyledIconActivityContainer>
          <KeyData 
            icon={`${pathPublic}/img/iconCalorie.svg`} 
            value={`${data.keyData.calorieCount}kCal`} 
            label='Calories'/>
          <KeyData
            icon={`${pathPublic}/img/iconProtein.svg`}
            value={`${data.keyData.proteinCount}kCal`}
            label='Proteines'/>
          <KeyData 
            icon={`${pathPublic}/img/iconCarb.svg`} 
            value={`${data.keyData.carbohydrateCount}kCal`} 
            label='Glucies'/>
          <KeyData 
            icon={`${pathPublic}/img/iconLipid.svg`} 
            value={`${data.keyData.lipidCount}kCal`} 
            label='Lipides'/>
        </StyledIconActivityContainer>
      </StyledContent>
    </StyledMain>
  );
};

export default User;