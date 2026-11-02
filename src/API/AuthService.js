import axios from 'axios';

const AUTH_URL = "http://localhost:8000/auth"


class AuthService {
    static async register({username, password, email, phone}) {
        try {
            const response = await axios.post(
                `${AUTH_URL}/register`,
                {
                    username: username,
                    password: password,
                    email: email,
                    phone_number: phone
                }
            )
            console.log(response.data);

            return response.data;
        } catch (error) {
            console.error('Произошла ошибка при регистрации', error);
            
        }
    }

    static async login({email, password}) {
        try {
            const response = await axios.post(
                `${AUTH_URL}/login`,
                {
                    email: email,
                    password: password
                }
            )
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Ошибка при авторизации', error);
            
        }
    }

    static async getMe() {
        try {
            const accessToken = localStorage.getItem("access_token");
            const response = await axios.get(
                `${AUTH_URL}/profile`,
                {
                    headers: {
                        "Authorization" : `Bearer ${accessToken}`
                    }
                }
            )

            console.log(response.data);

            if (response != null) {
               return response.data; 
            }
            
        } catch (error) {
            console.error('Ошибка при получении пользователя', error);
            
        }
    }
}

export default AuthService;