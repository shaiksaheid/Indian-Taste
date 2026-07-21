import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipesList from './pages/RecipesList';
import RecipeDetail from './pages/RecipeDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<RecipesList />} />
      <Route path="/recipes/category/:slug" element={<RecipesList />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  );
}
