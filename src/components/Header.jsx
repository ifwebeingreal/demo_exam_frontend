import '../styles/Header.css'
import { Link } from 'react-router-dom';
import userStore from '../store';
import { observer } from 'mobx-react-lite';


function Header() {
    function handleLogout() {
        localStorage.removeItem("access_token");
        userStore.setUser(null);
    }
    
    return (
      <header>
        <div className="header-container">
            <div className="header-logo">
                <Link to="/">Библиотека</Link>
            </div>

            <nav>
                <ul>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Магазины</a></li>
                </ul>
            </nav>

            <div className="header-nav">
                <ul>
                    {userStore.user !== null ? (
                        <>
                        <li><Link to="/profile">Профиль</Link></li> 
                        <button onClick={handleLogout}>Выйти</button>
                        </>
                    ) : (
                        <>
                       <li><a href="#">Корзина</a></li>
                       <li><Link to="/profile">Профиль</Link></li> 
                       </>
                    )}
                    
                </ul>
            </div>
        </div>
      </header>
    )
  }
  
export default observer(Header);
  