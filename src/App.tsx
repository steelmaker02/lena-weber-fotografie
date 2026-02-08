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
