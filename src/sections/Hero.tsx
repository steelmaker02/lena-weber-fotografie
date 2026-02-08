import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./hero-bg.jpg"
          alt="Lena Weber Photography Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide mb-6 font-serif"
          >
            Lena Weber
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-widest uppercase"
          >
            Fotografie
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white text-sm tracking-widest uppercase"
          >
            <button
              onClick={() => scrollToSection('street-gallery')}
              className="hover:text-white transition-all duration-300 border-b border-white/30 hover:border-white pb-1 cursor-pointer"
              aria-label="Zur Straßenfotografie-Galerie scrollen"
            >
              Straßenfotografie
            </button>

            <span className="hidden sm:inline opacity-30 text-white">|</span>

            <button
              onClick={() => scrollToSection('nude-gallery')}
              className="hover:text-white transition-all duration-300 border-b border-white/30 hover:border-white pb-1 cursor-pointer"
              aria-label="Zur Porträt-Galerie scrollen"
            >
              Künstlerische Porträts
            </button>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
          aria-label="Zum Über-mich-Bereich scrollen"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;