import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './NavBar.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search, location.hash]);

  // Close the mobile menu when clicking anywhere outside the navbar.
  useEffect(() => {
    if (!menuOpen) return;

    function handleOutsideClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleHomeClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  }

  return (
    <header className="navbar" ref={navRef}>
      <div className="container navbar-inner">
        <button
          type="button"
          className="navbar-hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className="navbar-logo" onClick={handleHomeClick}>
          <img src="/favicon.png" alt="" className="navbar-logo-icon" />
          <span className="navbar-logo-text">
            Andhra Vegetarian <span className="navbar-logo-highlight">Recipes</span>
          </span>
        </Link>

        <nav className={`navbar-links ${menuOpen ? 'is-open' : ''}`}>
          <Link to="/" onClick={handleHomeClick}>
            Home
          </Link>
          <Link to="/recipes" onClick={closeMenu}>Recipes</Link>

          <HashLink smooth to="/#categories" onClick={closeMenu}>
            Categories
          </HashLink>

          <HashLink smooth to="/#about" onClick={closeMenu}>
            About
          </HashLink>

          <HashLink smooth to="/#contact" onClick={closeMenu}>
            Contact
          </HashLink>
        </nav>
      </div>
    </header>
  );
}
