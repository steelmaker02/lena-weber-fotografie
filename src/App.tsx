import { useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import StreetGallery from './sections/StreetGallery';
import NudeGallery from './sections/NudeGallery';
import Pricing from './sections/Pricing';
import Statement from './sections/Statement';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    const imagesToPreload = [
      './hero-bg.jpg',
      './about-portrait.jpg',
      './street-1.jpg',
      './street-2.jpg',
      './nude-1.jpg',
      './nude-2.jpg',
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <StreetGallery />
        <NudeGallery />
        <Pricing />
        <Statement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
