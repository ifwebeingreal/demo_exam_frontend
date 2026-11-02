import { useState } from 'react';
import '../styles/LoginForm.css'
import { Link } from 'react-router-dom'
import AuthService from '../API/AuthService';
import { useNavigate } from 'react-router-dom'
import userStore from '../store';

function LoginForm() {
    const [login, setLogin] = useState({
        email: "", 
        password: "", 
    })

    let navigate = useNavigate();
 
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(login);
        const response = await AuthService.login(login);
        userStore.setUser(response.user);
        localStorage.setItem("access_token", response.access_token);
        navigate("/profile");
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                required
                className="login-email" 
                placeholder='Enter email'
                onChange={(e) => {
                    setLogin({...login, email: e.target.value})
                }}
            />
            <input 
                type="password" 
                required
                className="login-password" 
                placeholder='Enter password'
                onChange={(e) => {
                    setLogin({...login, password: e.target.value})
                }}
            />
            <button className="submit-login">Войти</button>
            <p className='login-text'>Еще нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
        </form>
    )
  }
  
export default LoginForm;
  