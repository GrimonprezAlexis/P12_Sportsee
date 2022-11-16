import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import styled from 'styled-components';

import KeyData from '../../components/KeyData';
import UserActivity from "../../components/UserActivity";
import UserBottomCharts from '../../components/UserBottomCharts';
import UserInfos from "../../components/UserInfos";

import { getUserInfos } from '../../services/userService';

const StyledMain = styled.main`
  margin-left: 6rem;
`;

const StyledIconActivityContainer = styled.aside`
    display: flex;
    flex-direction: column;
    margin: auto;
`

const User = () => {
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
  console.log('data', data)

  const pathPublic = `${window.location.origin}`;
  const calorieIcon = `${pathPublic}/img/iconCalorie.svg`;
  const proteinIcon = `${pathPublic}/img/iconProtein.svg`;
  const carbIcon = `${pathPublic}/img/iconCarb.svg`;
  const lipidIcon = `${pathPublic}/img/iconLipid.svg`;

  return (
    <StyledMain>
      <UserInfos data={data} />
      <div className="mt-2rem"></div>

      <section className='col12 flex'>
        <UserActivity />

        <StyledIconActivityContainer className='col4'>
          <KeyData icon={calorieIcon} value={`${data.keyData.calorieCount}kCal`} label='Calories'/>
          <KeyData icon={proteinIcon} value={`${data.keyData.proteinCount}kCal`} label='Proteines'/>
          <KeyData icon={carbIcon} value={`${data.keyData.carbohydrateCount}kCal`} label='Glucies'/>
          <KeyData icon={lipidIcon} value={`${data.keyData.lipidCount}kCal`} label='Lipides'/>
        </StyledIconActivityContainer>
      </section>

      <UserBottomCharts />
    </StyledMain>
  );
};

export default User;