import { useEffect, useState } from "react";
import { useParams } from "react-router";
import UserNameBanner from "../../components/User";
import { getUserById } from '../../services/userService'

const User = () => {
  
  // Prepare request service to getUserById
  const [data, setData] = useState([]);
	const {id} = useParams();

  useEffect(() => {
		const getData = async () => {
			const request = await getUserById(id);
			if (!request) return alert('data error');
			setData(request.data);
		};
		getData();
	}, [id]);
	if (data.length === 0) return null;


  return (
    <div>
      <h1>User {id}👩‍💻👨‍💻👩‍💻</h1>
      <UserNameBanner name={data.userInfos.firstName}/>
      
    </div>
  )
}

export default User
