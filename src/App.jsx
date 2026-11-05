import Footer from "./components/Footer"
import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom';
import routes from "./routes";
import { useEffect } from "react";
import AuthService from "./API/AuthService";
import userStore from "./store";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  useEffect(() => {
    async function checkAuth() {
      try {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken != null) {
          const result = await AuthService.getMe();

          if (result === undefined) {
            localStorage.removeItem("access_token");
            userStore.setUser(null);
            return;
          }

          userStore.setUser(result);
        }
      } catch (error) {
        console.error("Ошибка в функции checkAuth()", error);
        localStorage.removeItem("access_token");
        userStore.setUser(null);
      } finally {
        userStore.setLoading(false);
      }
    }
    checkAuth()
  }, []);

  return (
    <>
    <Header />

    <Routes>
      {routes.map((route) => {
        const Component = route.component;

        return <Route
                key={route.path}
                path={route.path}
                element={
                  route.private
                  ? <PrivateRoute><Component /></PrivateRoute>
                  : <Component />
              }
              />
      })}
    </Routes>

    <Footer />
    </>
  )
}

export default App
