import { Link } from 'react-router-dom';
import './AboutAuthor.css';

export default function AboutAuthor() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-content">
          <span className="eyebrow">🌿 About the Author 🌿</span>
          <h2 className="about-name">P. V. Ramana</h2>

          <p>
            P. V. Ramana is a widely respected culinary author known for bringing{' '}
            <strong>authentic Telugu vegetarian cuisine</strong> to readers through her
            thoughtfully crafted recipes and deep understanding of traditional cooking
            methods.
          </p>
          <p>
            Born in the East Godavari region of Andhra Pradesh, her culinary journey
            evolved through years of travel across India and abroad, where she shared
            the richness of Telugu cooking with families from different cultures and
            communities.
          </p>
          <p>
            Her recipes are admired for their simplicity, authenticity, and
            beginner-friendly approach, making traditional Indian cooking accessible to
            home cooks around the world. Her work has appeared in newspapers, cooking
            programs, and cultural events, earning appreciation from food lovers
            globally.
          </p>
          <p>
            This platform celebrates her timeless recipes by transforming them into a
            modern digital culinary experience while preserving the warmth and heritage
            of traditional Indian home cooking.
          </p>

          <Link to="/recipes" className="btn-pill">
            <span>📖</span> Explore Her Recipes
          </Link>

          <div className="about-badges">
            <div className="about-badge">
              <span className="about-badge-icon">🌿</span>
              <span>Authentic<br />Recipes</span>
            </div>
            <div className="about-badge">
              <span className="about-badge-icon">❤️</span>
              <span>Made with<br />Tradition</span>
            </div>
            <div className="about-badge">
              <span className="about-badge-icon">⭐</span>
              <span>Loved by<br />Thousands</span>
            </div>
          </div>
        </div>

        <div className="about-photo">
          <div className="about-photo-frame">
            <img src="/author.png" alt="Portrait of P. V. Ramana" />
          </div>
        </div>
      </div>
    </section>
  );
}
