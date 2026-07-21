import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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

          <HashLink smooth to="/#categories">
            Categories
          </HashLink>

          <HashLink smooth to="/#about">
            About
          </HashLink>

          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </nav>
      </div>
    </header>
  );
}
