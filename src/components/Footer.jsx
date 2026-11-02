import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite';

function Footer() {
    return (
      <footer>
        <div className="footer-container">
            <div className="footer-logo">
                <Link to="/">Библиотека</Link>
            </div>

            <div className="footer-element">
                <h3 className="footer-title">Адреса</h3>

                <ul>
                    <li>г. Москва</li>
                    <li>г. Уфа</li>
                </ul>
            </div>

            <div className="footer-element">
                <h3 className="footer-title">Контакты</h3>

                <ul>
                    <li>7 963 970 93 20</li>
                    <li>lib@gmail.com</li>
                </ul>
            </div>
        </div>
      </footer>
    )
  }
  
export default Footer;
  