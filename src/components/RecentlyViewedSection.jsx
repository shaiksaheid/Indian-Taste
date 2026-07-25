import { useEffect, useState } from 'react';
import recipes from '../data/recipes.json';
import RecipeMiniCard from './RecipeMiniCard';
import { getRecentlyViewed } from '../utils/recentlyViewed';
import './RecipeStrip.css';

export default function RecentlyViewedSection({ currentId }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const ids = getRecentlyViewed().filter((id) => id !== currentId);
    const found = ids
      .map((id) => recipes.find((r) => r.id === id))
      .filter(Boolean)
      .slice(0, 4);
    setItems(found);
  }, [currentId]);

  if (items.length === 0) return null;

  return (
    <section className="recipe-strip">
      <h3>Recently Viewed</h3>
      <div className="recipe-strip-grid">
        {items.map((r) => (
          <RecipeMiniCard recipe={r} key={r.id} />
        ))}
      </div>
    </section>
  );
}
