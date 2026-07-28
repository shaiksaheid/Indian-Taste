import { Link } from 'react-router-dom';
import { IconBook } from './icons';
import './ExploreSection.css';

export default function ExploreSection() {
  return (
    <section className="explore">
      <div className="container explore-inner">
        <h2>242 recipes.<br /> One kitchen. <br />A lifetime of tradition.</h2>
        <p>Every dish tested, written down, and passed on &mdash; from her kitchen to yours.</p>
        <Link to="/recipes" className="btn-pill explore-btn">
          <IconBook /> Explore Complete Recipes
        </Link>
      </div>
    </section>
  );
}
