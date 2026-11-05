import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/register",
        component: RegisterPage
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/profile",
        component: ProfilePage,
        private: true
    }
]

export default routes;