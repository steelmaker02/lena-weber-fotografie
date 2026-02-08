import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Statement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = "Fotografie ist das Pausieren der Zeit, das Festhalten des Vergänglichen. In jedem Bild suche ich nach jener Wahrheit, die jenseits der Oberfläche liegt – nach den Geschichten, die unsere Gesichter erzählen, nach der Poesie, die in den Alltag eingewoben ist.".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="statement" className="py-24 sm:py-32 lg:py-40 bg-[#f5f4f2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-widest text-neutral-500 mb-8 block">
            Künstlerisches Statement
          </span>
          
          <motion.blockquote
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-800 leading-relaxed"
          >
            <span className="font-serif text-5xl sm:text-6xl text-neutral-400 float-left mr-2 mt-[-0.2em]">"</span>
            {words.map((word, index) => (
              <motion.span
                variants={child}
                key={index}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <span className="font-serif text-5xl sm:text-6xl text-neutral-400 ml-1">"</span>
          </motion.blockquote>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-12"
          >
            <span className="text-neutral-500 text-sm tracking-widest uppercase">
              — Lena Weber
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statement;
