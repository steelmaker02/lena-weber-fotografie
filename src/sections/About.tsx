import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm uppercase tracking-widest text-neutral-500 mb-4 block"
            >
              Über mich
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-8 leading-tight"
            >
              Die Kunst des Moments
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-neutral-600 leading-relaxed"
            >
              <p>
                Ich bin Lena Weber, eine Fotografin aus Berlin. Meine Arbeit bewegt sich im Spannungsfeld zwischen der rohen Authentizität der Straße und der verletzlichen Intimität des menschlichen Körpers.
              </p>
              <p>
                In meiner Straßenfotografie suche ich nach jenen ungeschönten Momenten, die das wahre Gesicht einer Stadt enthüllen – das Spiel von Licht und Schatten, die Geschichten, die in Gesichtern vorüberziehen, die Poesie des Alltäglichen.
              </p>
              <p>
                Meine künstlerischen Porträts erforschen die Schönheit der menschlichen Form. Hier gilt es, Vertrauen zu schaffen und den Moment zu finden, in dem die Maske fällt und die Essenz eines Menschen sichtbar wird.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-neutral-200"
            >
              <div className="flex flex-wrap gap-8">
                <div>
                  <span className="text-3xl font-light text-neutral-900">8+</span>
                  <p className="text-sm text-neutral-500 mt-1">Jahre Erfahrung</p>
                </div>
                <div>
                  <span className="text-3xl font-light text-neutral-900">200+</span>
                  <p className="text-sm text-neutral-500 mt-1">Projekte</p>
                </div>
                <div>
                  <span className="text-3xl font-light text-neutral-900">15</span>
                  <p className="text-sm text-neutral-500 mt-1">Ausstellungen</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/about-portrait.jpg"
                alt="Lena Weber - Fotografin"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
