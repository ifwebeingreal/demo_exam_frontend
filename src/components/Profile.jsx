import { useEffect } from 'react';
import '../styles/Profile.css'
import AuthService from '../API/AuthService';
import { useNavigate } from 'react-router-dom'
import userStore from '../store';
import { observer } from 'mobx-react-lite';


function Profile() {
  let navigate = useNavigate()

  useEffect(() => {
    async function fetchUserData() {
      let result = await AuthService.getMe();
      console.log(result);

      if (result === undefined) {
        navigate("/register");
        return;
      }
      userStore.setUser(result);
    }
    fetchUserData()
  }, [navigate])

  if (userStore.user === null) {
    return <p>Загрузка...</p>
  }

    return (
      <div className="profile">
        <h1 className="profile-title">Добро пожаловать в профиль!</h1>
        <p className="profile-username">Username: {userStore.user.username}</p>
        <p className="profile-email">Email: {userStore.user.email}</p>
        <p className="profile-phone-number">Phone: {userStore.user.phone_number}</p>
        <p className="profile-created-at">Created at: {userStore.user.created_at}</p>
      </div>
    )
  }
  
export default observer(Profile);
  