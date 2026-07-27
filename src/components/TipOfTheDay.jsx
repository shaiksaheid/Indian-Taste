import { useEffect, useState } from 'react';
import { tips, tipIndexForToday } from '../data/tips';
import { IconBulb } from './icons';
import './TipOfTheDay.css';

const todayLabel = () =>
  new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

export default function TipOfTheDay() {
  const [tipIndex, setTipIndex] = useState(() => tipIndexForToday());
  const [dateLabel, setDateLabel] = useState(todayLabel());

  useEffect(() => {
    // Check periodically so the tip rolls over automatically at midnight
    // for anyone who leaves the site open, without needing a refresh.
    const interval = setInterval(() => {
      const freshIndex = tipIndexForToday();
      setTipIndex((current) => (current === freshIndex ? current : freshIndex));
      setDateLabel(todayLabel());
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="tip-section">
      <div className="container">
        <div className="tip-card" key={tipIndex}>
          <div className="tip-icon"><IconBulb /></div>
          <div className="tip-body">
            <span className="tip-eyebrow">Tip for {dateLabel}</span>
            <p className="tip-text">{tips[tipIndex]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
