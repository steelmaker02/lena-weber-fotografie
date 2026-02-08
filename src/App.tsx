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
      './hero-bg.webp',
      './about-portrait.webp',
      './street-1.webp',
      './street-2.webp',
      './nude-1.webp',
      './nude-2.webp',
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
