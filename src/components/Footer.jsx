import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { categories } from '../data/categories';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Andhra Vegetarian <span>Recipes</span></span>
          <p>Authentic South Indian &amp; Andhra vegetarian recipes, Telugu-style, from P. V. Ramana's kitchen to yours.</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/recipes">All Recipes</Link>
          <HashLink smooth to="/#about">About the Author</HashLink>
          <HashLink smooth to="/#categories">Categories</HashLink>
        </div>

        <div className="footer-col">
          <h4>Popular Categories</h4>
          {categories.slice(0, 4).map((c) => (
            <Link to={`/recipes/category/${c.slug}`} key={c.slug}>{c.name}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:pssrinivas1@gmail.com">pssrinivas1@gmail.com</a>
          <span>Hyderabad, Telangana</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          &copy; {new Date().getFullYear()} Andhra Vegetarian Recipes. All recipes by P. V. Ramana.
        </div>
        <div className="container footer-dev">
          Developed with ❤️ from Hyderabad &mdash; Shaik Shaheid ·{' '}
          <a href="mailto:shaikshaheid8@gmail.com">shaikshaheid8@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
