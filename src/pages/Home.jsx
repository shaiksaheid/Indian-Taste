import NavBar from '../components/NavBar';
import Header from '../components/Header';
import CategoriesSection from '../components/CategoriesSection';
import TipOfTheDay from '../components/TipOfTheDay';
import ExploreSection from '../components/ExploreSection';
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
      <AboutAuthor />
      <Footer />
    </>
  );
}
