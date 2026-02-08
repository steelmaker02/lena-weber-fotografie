import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const streetImages = [
  { src: './street-1.jpg', alt: 'Einsamkeit auf der Parkbank', title: 'Stille Momente' },
  { src: './street-2.jpg', alt: 'Regen in der Stadt', title: 'Neon-Nächte' },
  { src: './street-3.jpg', alt: 'U-Bahn Station', title: 'Urbaner Fluss' },
  { src: './street-4.jpg', alt: 'Gasse im Morgenlicht', title: 'Goldene Stunde' },
  { src: './street-5.jpg', alt: 'Café Reflexion', title: 'Spiegelungen' },
  { src: './street-6.jpg', alt: 'Saxophonist im Tunnel', title: 'Musik der Stadt' },
  { src: './street-7.jpg', alt: 'Kind mit Tauben', title: 'Unschuld' },
  { src: './street-8.jpg', alt: 'Lichtstrahlen in Ruine', title: 'Verlassene Schönheit' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as any }
  }
};

const StreetGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % streetImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + streetImages.length) % streetImages.length);
  };

  return (
    <>
      <section id="street-gallery" className="py-24 sm:py-32 lg:py-40 bg-[#1a1a1a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16 lg:mb-24"
          >
            <motion.span variants={itemVariants} className="text-sm uppercase tracking-widest text-neutral-500 mb-4 block">
              Portfolio
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 font-serif">
              Straßenfotografie
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-neutral-400 leading-relaxed italic">
              Die Stadt als Bühne, ihre Bewohner als Darsteller. Ein visuelles Tagebuch der urbanen Existenz, gefangen zwischen Licht und Schatten.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[0, 1].map((idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  onClick={() => openLightbox(idx)}
                  className="relative cursor-pointer group h-[400px] md:h-[500px]"
                >
                  <div className="w-full h-full overflow-hidden bg-neutral-900 shadow-sm">
                    <img
                      src={streetImages[idx].src}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <p className="text-white text-lg font-light tracking-wide font-serif">{streetImages[idx].title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[2, 3, 4].map((idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  onClick={() => openLightbox(idx)}
                  className="relative cursor-pointer group aspect-[3/4]"
                >
                  <div className="w-full h-full overflow-hidden bg-neutral-900 shadow-sm">
                    <img
                      src={streetImages[idx].src}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <p className="text-white text-lg font-light tracking-wide font-serif">{streetImages[idx].title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                onClick={() => openLightbox(5)}
                className="relative cursor-pointer group aspect-[4/3] md:aspect-auto md:h-[400px]"
              >
                <div className="w-full h-full overflow-hidden bg-neutral-900 shadow-sm">
                  <img src={streetImages[5].src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <p className="text-white text-lg font-light tracking-wide font-serif">{streetImages[5].title}</p>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                {[6, 7].map((idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    onClick={() => openLightbox(idx)}
                    className="relative cursor-pointer group aspect-square"
                  >
                    <div className="w-full h-full overflow-hidden bg-neutral-900 shadow-sm">
                      <img src={streetImages[idx].src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <p className="text-white text-sm font-light tracking-wide font-serif">{streetImages[idx].title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={closeLightbox}
        >
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white z-10"><X className="w-10 h-10" /></button>
          <button onClick={prevImage} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10"><ChevronLeft className="w-12 h-12" /></button>
          <button onClick={nextImage} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10"><ChevronRight className="w-12 h-12" /></button>

          <div className="relative max-w-full max-h-full flex flex-col items-center">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={streetImages[currentImageIndex].src}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-6 text-center text-white/80">
              <p className="text-xl font-serif mb-1">{streetImages[currentImageIndex].title}</p>
              <p className="text-sm opacity-50 uppercase tracking-widest">{currentImageIndex + 1} / {streetImages.length}</p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default StreetGallery;