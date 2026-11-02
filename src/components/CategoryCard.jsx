import '../styles/Category.css'

function CategoryCard({name}) {

    return (
        <div className="category-card">
            <p className="category-title">{name}</p>
        </div>
    )
  }
  
export default CategoryCard;
  