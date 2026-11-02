import { useState, useEffect } from 'react';
import CategoryService from '../API/CategoryService';
import '../styles/Category.css'
import CategoryCard from './CategoryCard';


function Category() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            let result = await CategoryService.getAll();
            setCategories(result);
        }
        fetchCategories();
    }, [])

    return (
        <div className="category">
            <h3 className="categories-title">Категории</h3>

            <div className="categories">
                {categories.map(category => 
                    <CategoryCard 
                        key={category.id}
                        name={category.name}
                    />
                )}
            </div>
        </div>
    )
  }
  
export default Category;
  