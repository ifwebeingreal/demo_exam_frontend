import { useState, useEffect } from 'react';
import BookService from '../API/BookService';
import '../styles/Catalog.css'
import ProductCard from './ProductCard';


function Catalog() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      async function fetchBook() {
        let result = await BookService.getAll();
        setProducts(result);
      }
      fetchBook()
    }, [])

    return (
      <div className="catalog">
        <h3 className="catalog-title">Каталог</h3>

        <div className="catalog-cards">
            {products.map(product => 
                <ProductCard 
                    key={product.id}
                    title={product.title}
                    price={product.price}
                />
            )}
        </div>
      </div>
    )
  }
  
export default Catalog;
  