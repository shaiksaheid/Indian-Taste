import { useEffect, useState } from 'react';
import { seedReviews } from '../data/reviews';
import './ReviewsSection.css';

const STORAGE_KEY = 'indian-taste-reviews';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(seedReviews);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [justSubmitted, setJustSubmitted] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (Array.isArray(stored) && stored.length) {
        setReviews([...stored, ...seedReviews]);
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview = { name: name.trim(), text: text.trim() };
    const updated = [newReview, ...reviews];
    setReviews(updated);

    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      localStorage.setItem(STORAGE_KEY, JSON.stringify([newReview, ...stored]));
    } catch {
      // storage unavailable, review still shows for this session
    }

    setName('');
    setText('');
    setJustSubmitted(true);
    setTimeout(() => setJustSubmitted(false), 2500);
  }

  // Duplicate the list so the CSS marquee can loop seamlessly.
  const marqueeItems = [...reviews, ...reviews];

  return (
    <section className="reviews-section" id="reviews">
      <div className="container reviews-inner">
        <div className="reviews-heading">
          <span className="eyebrow">✦ Reviews ✦</span>
          <h2>What home cooks are saying</h2>
          <p>Tried a recipe? Tell others what you thought.</p>
        </div>

        <div className="reviews-grid">
          <form className="review-form" onSubmit={handleSubmit}>
            <label htmlFor="review-name">Your name</label>
            <input
              id="review-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sita Kumari"
              required
            />

            <label htmlFor="review-text">Your review</label>
            <textarea
              id="review-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Which recipe did you try? How did it turn out?"
              rows={5}
              required
            />

            <button type="submit" className="btn-pill">Submit Review</button>
            {justSubmitted && <span className="review-thanks">Thanks for sharing! 🌿</span>}
          </form>

          <div className="reviews-scroller">
            <div className="reviews-scroller-track">
              {marqueeItems.map((r, i) => (
                <div className="review-card" key={i}>
                  <div className="review-avatar">{r.name.charAt(0)}</div>
                  <div>
                    <p className="review-name">{r.name}</p>
                    <p className="review-text">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
