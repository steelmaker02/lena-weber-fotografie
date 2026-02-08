import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Statement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = "Fotografie ist das Pausieren der Zeit, das Festhalten des Vergänglichen. In jedem Bild suche ich nach jener Wahrheit, die jenseits der Oberfläche liegt – nach den Geschichten, die unsere Gesichter erzählen, nach der Poesie, die in den Alltag eingewoben ist.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.3
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as any },
    },
  };

  return (
    <section id="statement" className="py-24 sm:py-32 lg:py-40 bg-[#f5f4f2] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-widest text-neutral-400 mb-12 block font-medium">
            Künstlerisches Statement
          </span>

          <motion.blockquote
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-800 leading-relaxed relative"
          >
            <span className="font-serif text-7xl text-neutral-200 absolute -left-8 -top-8 select-none">"</span>
            {words.map((word, index) => (
              <motion.span
                variants={wordVariants}
                key={index}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <span className="font-serif text-7xl text-neutral-200 absolute -bottom-12 select-none">"</span>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-16"
          >
            <span className="text-neutral-500 text-xs tracking-[0.3em] uppercase font-semibold">
              — Lena Weber
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statement;