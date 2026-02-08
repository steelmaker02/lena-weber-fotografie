import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as any
      }
    },
  };

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-[#faf9f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 lg:order-1"
          >
            <motion.span variants={itemVariants} className="text-sm uppercase tracking-widest text-neutral-500 mb-4 block">
              Über mich
            </motion.span>

            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-8 leading-tight font-serif">
              Die Kunst des Moments
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-neutral-600 leading-relaxed">
              <p>Ich bin Lena Weber, eine Fotografin aus Berlin. Meine Arbeit bewegт sich im Spannungsfeld zwischen der rohen Authentizität der Straße und der verletzlichen Intimität des menschlichen Körpers.</p>
              <p>In meiner Straßenfotografie suche ich nach jenen ungeschönten Momenten, die das wahre Gesicht einer Stadt enthüllen.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap gap-8">
                <div>
                  <span className="text-3xl font-light text-neutral-900">8+</span>
                  <p className="text-sm text-neutral-500 mt-1">Jahre Erfahrung</p>
                </div>
                <div>
                  <span className="text-3xl font-light text-neutral-900">200+</span>
                  <p className="text-sm text-neutral-500 mt-1">Projekte</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeOut" as any }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
              <img
                src="./about-portrait.jpg"
                alt="Lena Weber - Fotografin"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;