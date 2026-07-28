import { useEffect, useState } from 'react';
import introVideo from '../assets/videos/intro.mp4';
import './SplashScreen.css';

const DISPLAY_DURATION = 1500; // ms the splash stays fully visible
const FADE_DURATION = 700; // ms fade-to-home transition

export default function SplashScreen({ onFinish }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const fadeTimer = setTimeout(() => setFadingOut(true), DISPLAY_DURATION);
    const finishTimer = setTimeout(() => {
      document.body.style.overflow = previousOverflow;
      onFinish();
    }, DISPLAY_DURATION + FADE_DURATION);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onFinish]);

  return (
    <div
      className={`splash-screen ${fadingOut ? 'is-fading' : ''}`}
      style={{ transitionDuration: `${FADE_DURATION}ms` }}
      role="status"
      aria-live="polite"
      aria-label="Loading Andhra Vegetarian Recipes"
    >
      <div className="splash-brand">
        <img src="/favicon.png" alt="" className="splash-logo-icon" />
        <span className="splash-logo-text">
          Andhra Vegetarian <span className="splash-highlight">Recipes</span>
        </span>
      </div>

      <div className="splash-video-wrap">
        <video
          className="splash-video"
          src={introVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
}
