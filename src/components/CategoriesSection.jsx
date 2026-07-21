import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import './CategoriesSection.css';

export default function CategoriesSection() {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="categories-heading">
          <span className="eyebrow">✦ Browse by Category ✦</span>
          <h2>What are you cooking today?</h2>
          <p>Ten collections spanning every course, from festival sweets to everyday pappu.</p>
        </div>

        <div className="categories-grid">
  {categories.map((cat) => {
    const count = cat.range[1] - cat.range[0] + 1;

    return (
      <Link
        to={`/recipes/category/${cat.slug}`}
        className="category-card"
        key={cat.slug}
      >
        <div className="category-icon">
          <img
            src={cat.icon}
            alt={cat.name}
            loading="lazy"
          />
        </div>

        <h3>{cat.name}</h3>

        <span className="category-count">
          {count} recipes
        </span>
      </Link>
    );
  })}
</div>
      </div>
    </section>
  );
}
