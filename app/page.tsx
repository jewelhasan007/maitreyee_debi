import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Books from './components/Books';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Social from './components/Social';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import Navigation_en from './components/Navigation_en';

export default function Home() {
  return (
    <>
      {/* <Navigation /> */}
      <Navigation_en></Navigation_en>
      <Hero />
      <About />
      <Books />
      <Music />
      <Gallery />
      <Social />
      <Contact />
      <Timeline />
      <Footer />
      <AdminPanel />
    </>
  );
}
