import '../styles/Catalog.css'

function ProductCard({title, price}) {

    return (
        <article className="product-card">
        <img src="" alt="product 1" className="product-image" />
        <p className="product-title">{title}</p>
        <p className="product-price">{price} RUB</p>
        <button className="product-btn">Купить</button>
    </article>
    )
  }
  
export default ProductCard;
  