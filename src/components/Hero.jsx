import '../styles/Hero.css'

function Hero() {

    return (
      <div className="hero">
        <h2 className="hero-title">Лучшие книги</h2>
        <p className="hero-text">Ты сможешь найти здесь!</p>

        <form className="hero-form">
            <input type="text" placeholder='Какое сегодня настроение?'/>
            <button type='submit'>Найти</button>
        </form>
      </div>
    )
  }
  
export default Hero;
  