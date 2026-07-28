import introVideo from '../assets/videos/intro.mp4';
import './PageLoader.css';

export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading">
      <div className="page-loader-video-wrap">
        <video
          className="page-loader-video"
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
