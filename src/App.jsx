import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import { Routes, Route } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {

  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
    </Routes>

    <Footer />
    </>
  )
}

export default App
