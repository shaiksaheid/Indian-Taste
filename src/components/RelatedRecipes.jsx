import recipes from '../data/recipes.json';
import RecipeMiniCard from './RecipeMiniCard';
import './RecipeStrip.css';

export default function RelatedRecipes({ currentId, category }) {
  if (!category) return null;

  const related = recipes
    .filter((r) => r.id !== currentId && r.id >= category.range[0] && r.id <= category.range[1])
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="recipe-strip">
      <h3>More {category.name}</h3>
      <div className="recipe-strip-grid">
        {related.map((r) => (
          <RecipeMiniCard recipe={r} key={r.id} />
        ))}
      </div>
    </section>
  );
}
