import { useState } from 'react';
import '../styles/RegisterForm.css'
import { Link } from 'react-router-dom'
import AuthService from '../API/AuthService';
import { useNavigate } from 'react-router-dom'
import userStore from '../store';

function RegisterForm() {
    const [register, setRegister] = useState({
        username: "", 
        password: "", 
        email: "", 
        phone: "+7"
    })
    const [error, setError] = useState("");

    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(register);

        const phoneRegex = /^\+7[ (]*\d{3}[ )]*\d{3}[ -]*\d{2}[ -]*\d{2}$/;

        if (phoneRegex.test(register.phone)) {
           const response = await AuthService.register(register);
            userStore.setUser(response.user);
            localStorage.setItem("access_token", response.access_token);
            navigate("/profile"); 
        }
        else {
            setError("Неккоретный номер телефона!");
        }
    }

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                required
                className="register-username" 
                placeholder='Enter username'
                onChange={
                    (e) => {
                        setRegister({...register, username: e.target.value})
                    }
                }
            />
            <input 
                type="password" 
                required
                className="register-password" 
                placeholder='Enter password'
                onChange={(e) => {
                    setRegister({...register, password: e.target.value})
                }}
            />
            <input 
                type="email" 
                required
                className="register-email" 
                placeholder='Enter email'
                onChange={(e) => {
                    setRegister({...register, email: e.target.value})
                }}
            />
            <input 
                type="tel" 
                value={register.phone}
                required
                className="register-phone-number" 
                placeholder='Enter phone'
                onChange={(e) => {
                    setRegister({...register, phone: e.target.value})
                }}
            />
            <p className="erorr-text">{ error }</p>
            <button className="submit-register">Зарегистрироваться</button>
            <p className='register-text'>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
        </form>
    )
  }
  
export default RegisterForm;
  