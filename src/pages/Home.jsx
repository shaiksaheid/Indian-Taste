import NavBar from '../components/NavBar';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import TipOfTheDay from '../components/TipOfTheDay';
import ExploreSection from '../components/ExploreSection';
import ReviewsSection from '../components/ReviewsSection';
import BookPromo from '../components/BookPromo';
import AboutAuthor from '../components/AboutAuthor';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <CategoriesSection />
      <TipOfTheDay />
      <ExploreSection />
      <ReviewsSection />
      <BookPromo />
      <AboutAuthor />
      <Footer />
    </>
  );
}
