import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const nudeImages = [
  { src: './nude-1.jpg', alt: 'Tanz im Fensterlicht', title: 'Lichtspiel' },
  { src: './nude-2.jpg', alt: 'Profil in Chiaroscuro', title: 'Konturen' },
  { src: './nude-3.jpg', alt: 'Silhouette hinter Vorhang', title: 'Schleier' },
  { src: './nude-4.jpg', alt: 'Verschränkte Hände', title: 'Berührung' },
  { src: './nude-5.jpg', alt: 'Tanz mit Stoff', title: 'Eleganz' },
  { src: './nude-6.jpg', alt: 'Nachdenkliche Pose', title: 'Reflexion' },
  { src: './nude-7.jpg', alt: 'Ballett Anmut', title: 'Anmut' },
  { src: './nude-8.jpg', alt: 'Torso Studie', title: 'Form' },
  { src: './nude-9.jpg', alt: 'Morgenlicht im Studio', title: 'Erwachen' },
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

const NudeGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
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
    setCurrentImageIndex((prev) => (prev + 1) % nudeImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + nudeImages.length) % nudeImages.length);
  };

  return (
    <>
      <section id="nude-gallery" className="py-24 sm:py-32 lg:py-40 bg-[#f5f3f0] overflow-hidden">
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
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-6 font-serif">
              Künstlerische Porträts
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-neutral-600 leading-relaxed italic">
              Die Erforschung der menschlichen Form durch Licht und Schatten. Eine Hommage an die zeitlose Schönheit des Körpers als Kunstobjekt.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {nudeImages.map((image, index) => (
              <motion.div
                key={image.src}
                variants={itemVariants}
                className="break-inside-avoid relative cursor-pointer group mb-6"
                onClick={() => openLightbox(index)}
              >
                <div className="overflow-hidden bg-neutral-200 shadow-sm">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <p className="text-white text-lg font-light tracking-wide font-serif">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              src={nudeImages[currentImageIndex].src}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-6 text-center text-white/80">
              <p className="text-xl font-serif mb-1">{nudeImages[currentImageIndex].title}</p>
              <p className="text-sm opacity-50 uppercase tracking-widest">{currentImageIndex + 1} / {nudeImages.length}</p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NudeGallery;