import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconLeaf, IconHeart, IconStar, IconChili, IconCoconut, IconBowl, IconSpices, IconLotus } from './icons';
import './Header.css';

const PLACEHOLDERS = [
  'Search by recipe name...',
  'Search by ingredient you have...',
];

const MOTIF_ICONS = [IconChili, IconCoconut, IconLeaf, IconBowl, IconSpices, IconLotus];

export default function Header() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % PLACEHOLDERS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) navigate(`/recipes?q=${encodeURIComponent(query.trim())}`);
  }

  const showAnimatedPlaceholder = !query && !focused;

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow">✦ South Indian &amp; Andhra Style Cooking ✦</span>
          <h1 className="hero-title">
            Recipes made with <span>love</span>,<br /> served with tradition
          </h1>
          <p className="hero-subtitle">
            Authentic South Indian &amp; Andhra recipes by{' '}
            <span className="no-wrap">P. V. Ramana</span> &mdash; sweets to pickles,
            dosas to pappu, all in one place.
          </p>

          <form className="hero-search" onSubmit={handleSearch}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <div className="hero-search-field">
              {showAnimatedPlaceholder && (
                <span key={placeholderIndex} className="hero-search-placeholder">
                  {PLACEHOLDERS[placeholderIndex]}
                </span>
              )}
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                aria-label="Search recipes by name or ingredient"
              />
            </div>

            <button type="submit" className="btn-pill">Search</button>
          </form>

          <div className="hero-badges">
            <span className="hero-badge"><IconLeaf className="hero-badge-icon leaf" /> Authentic Recipes</span>
            <span className="hero-badge"><IconHeart className="hero-badge-icon heart" /> Made with Tradition</span>
            <span className="hero-badge"><IconStar className="hero-badge-icon star" /> Loved by Thousands</span>
          </div>
        </div>

        <div className="hero-motif" aria-hidden="true">
          <div className="motif-ring">
            {MOTIF_ICONS.map((Icon, i) => (
              <div
                className="motif-icon-position"
                style={{ '--angle': `${i * (360 / MOTIF_ICONS.length)}deg` }}
                key={i}
              >
                <div className="motif-icon-offset">
                  <span className="motif-icon-badge">
                    <Icon />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="motif-center">
            <span className="motif-center-label">Andhra<br />Flavours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
