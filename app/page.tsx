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
import Hero_en from './components/Hero_en';
import About_en from './components/About_en';
import Books_en from './components/Books_en';
import Music_en from './components/Music_en';
import Gallery_en from './components/Gallery_en';
import Social_en from './components/Social_en';
import Contact_en from './components/Contact_en';
import Timeline_en from './components/Timeline_en';
import Footer_en from './components/Footer_en';

export default function Home() {
  return (
    <>
      {/* <Navigation /> */}
      <Navigation_en></Navigation_en>
      {/* <Hero /> */}
      <Hero_en></Hero_en>
      {/* <About /> */}
      <About_en></About_en>
      {/* <Books /> */}
      <Books_en></Books_en>
      {/* <Music /> */}
      <Music_en></Music_en>
      {/* <Gallery /> */}
      <Gallery_en></Gallery_en>
      {/* <Social /> */}
      <Social_en></Social_en>
      {/* <Contact /> */}
      <Contact_en></Contact_en>
      {/* <Timeline /> */}
      <Timeline_en></Timeline_en>
      {/* <Footer /> */}
      <Footer_en></Footer_en>
      <AdminPanel />
    </>
  );
}
