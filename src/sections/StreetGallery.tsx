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
      <section id="street-gallery" className="py-24 sm:py-32 lg:py-40 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-16 lg:mb-24"
          >
            <span className="text-sm uppercase tracking-widest text-neutral-500 mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
              Straßenfotografie
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-400 leading-relaxed">
              Die Stadt als Bühne, ihre Bewohner als Darsteller. Ein visuelles Tagebuch der urbanen Existenz, gefangen zwischen Licht und Schatten.
            </p>
          </motion.div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="gallery-item relative cursor-pointer group aspect-[4/3] md:aspect-auto md:h-[500px]"
                onClick={() => openLightbox(0)}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={streetImages[0].src}
                    alt={streetImages[0].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-white text-xl font-light">{streetImages[0].title}</h3>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="gallery-item relative cursor-pointer group aspect-[4/3] md:aspect-auto md:h-[500px]"
                onClick={() => openLightbox(1)}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={streetImages[1].src}
                    alt={streetImages[1].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-white text-xl font-light">{streetImages[1].title}</h3>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[2, 3, 4].map((index, i) => (
                <motion.div
                  key={streetImages[index].src}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                  className="gallery-item relative cursor-pointer group aspect-[3/4]"
                  onClick={() => openLightbox(index)}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={streetImages[index].src}
                      alt={streetImages[index].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-white text-lg font-light">{streetImages[index].title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="gallery-item relative cursor-pointer group aspect-[4/3] md:aspect-auto md:h-[400px]"
                onClick={() => openLightbox(5)}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={streetImages[5].src}
                    alt={streetImages[5].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-white text-xl font-light">{streetImages[5].title}</h3>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="grid grid-cols-2 gap-4"
              >
                {[6, 7].map((index) => (
                  <div
                    key={streetImages[index].src}
                    className="gallery-item relative cursor-pointer group aspect-square"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={streetImages[index].src}
                        alt={streetImages[index].alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-white text-sm font-light">{streetImages[index].title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lightbox-overlay"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={streetImages[currentImageIndex].src}
            alt={streetImages[currentImageIndex].alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center">
            <p className="text-lg text-white mb-1">{streetImages[currentImageIndex].title}</p>
            <p>{currentImageIndex + 1} / {streetImages.length}</p>
          </div>
        </motion.div>
      )}
    </>
  );
};
export default StreetGallery;