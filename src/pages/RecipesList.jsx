import { useMemo, useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import recipes from '../data/recipes.json';
import { categories, categoryForId } from '../data/categories';
import { setPageMeta } from '../utils/seo';
import './RecipesList.css';

export default function RecipesList() {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const activeCategory = slug ? categories.find((c) => c.slug === slug) : null;

  useEffect(() => {
    if (activeCategory) {
      setPageMeta({
        title: `${activeCategory.name} Recipes | Andhra Vegetarian Recipes | South Indian & Telugu Cooking`,
        description: `Browse all ${activeCategory.name} recipes by P. V. Ramana — authentic South Indian, Andhra and Telugu-style vegetarian dishes with full ingredients and step-by-step procedure.`,
      });
    } else {
      setPageMeta({
        title: 'All Recipes | Andhra Vegetarian Recipes | South Indian & Telugu Cooking',
        description: 'Search and browse the complete collection of 242 authentic South Indian and Andhra vegetarian recipes by P. V. Ramana.',
      });
    }
    return () => setPageMeta();
  }, [activeCategory]);

  const results = useMemo(() => {
    let list = recipes;
    if (activeCategory) {
      list = list.filter((r) => r.id >= activeCategory.range[0] && r.id <= activeCategory.range[1]);
    }
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((r) => {
        const inTitle = r.title.toLowerCase().includes(q) || (r.subtitle || '').toLowerCase().includes(q);
        const inIngredients = r.ingredients?.some((ing) => ing.name.toLowerCase().includes(q));
        return inTitle || inIngredients;
      });
    }
    return list;
  }, [activeCategory, query]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    setSearchParams(query.trim() ? { q: query.trim() } : {});
  }

  return (
    <>
      <NavBar />
      <section className="recipes-page">
        <div className="container">
          <div className="recipes-header">
            <div>
              <span className="eyebrow">✦ {activeCategory ? activeCategory.name : 'All Recipes'} ✦</span>
              <h1>{activeCategory ? activeCategory.name : 'Complete Recipe Collection'}</h1>
              <p>{results.length} recipe{results.length !== 1 ? 's' : ''} found</p>
            </div>

            <form className="recipes-search" onSubmit={handleSearchSubmit}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search by name or ingredient..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search recipes"
              />
              <button type="submit" className="btn-pill">Search</button>
            </form>
          </div>

          <div className="recipes-filters">
            <Link to="/recipes" className={`filter-chip ${!activeCategory ? 'active' : ''}`}>All</Link>
            {categories.map((c) => (
              <Link
                to={`/recipes/category/${c.slug}`}
                key={c.slug}
                className={`filter-chip ${activeCategory?.slug === c.slug ? 'active' : ''}`}
              >
                <img className="filter-chip-icon" src={c.icon} alt="" /> {c.name}
              </Link>
            ))}
          </div>

          {results.length === 0 ? (
            <div className="recipes-empty">
              <p>No recipes match "{query}". Try a different name or ingredient.</p>
            </div>
          ) : (
            <div className="recipes-grid">
              {results.map((r) => {
                const cat = categoryForId(r.id);
                return (
                  <Link to={`/recipe/${r.id}`} className="recipe-card" key={r.id}>
                    {cat?.icon ? (
                      <img className="recipe-card-icon" src={cat.icon} alt="" />
                    ) : (
                      <div className="recipe-card-icon">🍽️</div>
                    )}
                    <h3>{r.title}</h3>
                    {r.subtitle && <p>{r.subtitle}</p>}
                    <span className="recipe-card-cat">{cat?.name}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
