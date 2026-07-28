import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import RecipesList from './pages/RecipesList';
import RecipeDetail from './pages/RecipeDetail';

const ROUTE_LOADER_DURATION = 650; // ms the video loader shows on each page change

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [routeLoading, setRouteLoading] = useState(false);
  const location = useLocation();
  const isFirstRender = useRef(true);

  // Show the same intro video briefly whenever the user navigates to a
  // different page (skips the very first render, since the splash already
  // covers that moment).
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setRouteLoading(true);
    const timer = setTimeout(() => setRouteLoading(false), ROUTE_LOADER_DURATION);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      {routeLoading && <PageLoader />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesList />} />
        <Route path="/recipes/category/:slug" element={<RecipesList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </>
  );
}
