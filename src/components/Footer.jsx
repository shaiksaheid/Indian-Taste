import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Indian <span>Taste</span></span>
          <p>Authentic Telugu vegetarian recipes from P. V. Ramana's kitchen to yours.</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/recipes">All Recipes</Link>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-col">
          <h4>Popular Categories</h4>
          {categories.slice(0, 4).map((c) => (
            <Link to={`/recipes/category/${c.slug}`} key={c.slug}>{c.name}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:shaikshaheid8@gmail.com">shaikshaheid8@gmail.com</a>
          <span>Hyderabad, Telanagana</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          &copy; {new Date().getFullYear()} Indian Taste. All recipes by P. V. Ramana.
        </div>
        <div className="container footer-dev">
          Developed with ❤️ in Hyderabad &mdash; Shaik Shaheid ·{' '}
          <a href="mailto:shaikshaheid8@gmail.com">shaikshaheid8@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
