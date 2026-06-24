
import AdminPanel from './components/AdminPanel';
import Hero_en from './components/Hero_en';
import About_en from './components/About_en';
import Books_en from './components/Books_en';
import Music_en from './components/Music_en';
import Gallery_en from './components/Gallery_en';
import Contact_en from './components/Contact_en';
import Footer_en from './components/Footer_en';
import Timeline_en6 from './components/Timeline_en6';

export default function Home() {
  return (
    <>
        <Hero_en></Hero_en>
        <About_en></About_en>
        <Books_en></Books_en>
        <Music_en></Music_en>
        <Gallery_en></Gallery_en>
        <Timeline_en6></Timeline_en6>
        <Contact_en></Contact_en>
        <Footer_en></Footer_en>
        <AdminPanel />
    </>
  );
}
