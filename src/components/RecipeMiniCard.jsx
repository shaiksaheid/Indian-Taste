import { Link } from 'react-router-dom';
import { categoryForId } from '../data/categories';
import './RecipeMiniCard.css';

export default function RecipeMiniCard({ recipe }) {
  const cat = categoryForId(recipe.id);
  return (
    <Link to={`/recipe/${recipe.id}`} className="mini-card">
      {cat?.icon ? (
        <img className="mini-card-icon" src={cat.icon} alt="" />
      ) : (
        <div className="mini-card-icon">🍽️</div>
      )}
      <div>
        <h4>{recipe.title}</h4>
        {recipe.subtitle && <p>{recipe.subtitle}</p>}
      </div>
    </Link>
  );
}
