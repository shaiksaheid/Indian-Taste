import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src="/favicon.png" alt="" className="navbar-logo-icon" />
          <span className="navbar-logo-text">
            Indian <span className="navbar-logo-highlight">Taste</span>
          </span>
        </Link>
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
