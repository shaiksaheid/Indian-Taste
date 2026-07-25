import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import RelatedRecipes from '../components/RelatedRecipes';
import RecentlyViewedSection from '../components/RecentlyViewedSection';
import recipes from '../data/recipes.json';
import { categoryForId } from '../data/categories';
import { addRecentlyViewed } from '../utils/recentlyViewed';
import { setPageMeta, setRecipeJsonLd, clearRecipeJsonLd } from '../utils/seo';
import './RecipeDetail.css';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => String(r.id) === id);

  useEffect(() => {
    if (!recipe) return;
    const category = categoryForId(recipe.id);

    addRecentlyViewed(recipe.id);
    setPageMeta({
      title: `${recipe.title} Recipe | Indian Taste`,
      description: recipe.subtitle
        ? `${recipe.subtitle} — ${recipe.title} recipe with full ingredients and step-by-step procedure, by P. V. Ramana.`
        : `${recipe.title} recipe with full ingredients and step-by-step procedure, by P. V. Ramana.`,
    });
    setRecipeJsonLd(recipe, category?.name);

    return () => {
      clearRecipeJsonLd();
      setPageMeta();
    };
  }, [recipe]);

  if (!recipe) {
    return (
      <>
        <NavBar />
        <div className="container recipe-not-found">
          <h1>Recipe not found</h1>
          <p>We couldn't find that recipe.</p>
          <Link to="/recipes" className="btn-pill">Back to Recipes</Link>
        </div>
        <Footer />
      </>
    );
  }

  const category = categoryForId(recipe.id);

  return (
    <>
      <NavBar />
      <section className="recipe-detail">
        <div className="container">
          <Link to={`/recipes/category/${category?.slug}`} className="recipe-back">
            ← {category?.name || 'All Recipes'}
          </Link>

          <div className="recipe-detail-header">
            {category?.icon ? (
              <img className="recipe-detail-icon" src={category.icon} alt="" />
            ) : null}
            <h1>{recipe.title}</h1>
            {recipe.subtitle && <p className="recipe-detail-subtitle">{recipe.subtitle}</p>}
          </div>

          <div className="recipe-detail-body">
            <div className="recipe-ingredients">
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients?.map((ing, i) => (
                  <li key={i}>
                    <span>{ing.name}</span>
                    <span className="qty">{ing.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="recipe-procedure">
              <h2>Procedure</h2>
              <ol>
                {recipe.procedure?.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>

              {recipe.note && (
                <div className="recipe-note">
                  <strong>Note:</strong> {recipe.note}
                </div>
              )}
            </div>
          </div>
        </div>

        <RelatedRecipes currentId={recipe.id} category={category} />
        <RecentlyViewedSection currentId={recipe.id} />
      </section>
      <Footer />
    </>
  );
}
