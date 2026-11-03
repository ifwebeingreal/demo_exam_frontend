import Footer from "./components/Footer"
import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom';
import routes from "./routes";

function App() {

  return (
    <>
    <Header />

    <Routes>
      {routes.map((route) => {
        return <Route path={route.path} Component={route.component}></Route>
      })}
    </Routes>

    <Footer />
    </>
  )
}

export default App
