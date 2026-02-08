import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Clock, Images, Sparkles, Check, ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'Essential',
    price: '250',
    description: 'Perfekt für Einzelporträts und persönliche Momente',
    duration: '1 Stunde',
    images: '15 bearbeitete Bilder',
    features: [
      'Professionelle Beratung',
      'Studio oder Outdoor',
      'Make-up & Styling-Tipps',
      'Online-Galerie',
      'Druckfreigabe',
    ],
    icon: Camera,
    popular: false,
  },
  {
    name: 'Premium',
    price: '590',
    description: 'Das beliebteste Paket für anspruchsvolle Shootings',
    duration: '3 Stunden',
    images: '40 bearbeitete Bilder',
    features: [
      'Professionelle Beratung',
      'Studio & Outdoor',
      'Professionelles Make-up',
      '3 Outfit-Wechsel',
      'Online-Galerie',
      'Druckfreigabe',
      'Express-Bearbeitung',
      '10 Fine-Art Prints',
    ],
    icon: Sparkles,
    popular: true,
  },
  {
    name: 'Exclusive',
    price: '999',
    description: 'Das ultimative Erlebnis für besondere Anlässe',
    duration: 'Ganztägig',
    images: '80+ bearbeitete Bilder',
    features: [
      'Konzeptentwicklung',
      'Mehrere Locations',
      'Professionelles Styling',
      'Unbegrenzte Outfits',
      'Private Online-Galerie',
      'Druckfreigabe',
      'Prioritäts-Bearbeitung',
      '20 Fine-Art Prints',
      'Premium Fotobuch',
    ],
    icon: Images,
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as any },
  },
};

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 sm:py-32 lg:py-40 bg-[#faf9f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.span variants={itemVariants} className="text-sm uppercase tracking-widest text-neutral-500 mb-4 block">
            Preise
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-6 font-serif">
            Ihr persönliches Fotoshooting
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-neutral-600 leading-relaxed text-lg italic">
            Jedes Shooting ist einzigartig – genau wie Sie. Ich erstelle Ihnen ein maßgeschneidertes Angebot,
            das perfekt zu Ihren Wünschen passt.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24"
        >
          {[
            { step: '01', title: 'Kennenlernen', desc: 'Wir besprechen Ihre Vision in einem unverbindlichen Gespräch.' },
            { step: '02', title: 'Konzept', desc: 'Ich entwickle ein individuelles Konzept passend zu Ihrem Stil.' },
            { step: '03', title: 'Shooting', desc: 'Entspanntes Shooting in professioneller Atmosphäre.' },
            { step: '04', title: 'Bilder', desc: 'Sorgfältige Auswahl und Bearbeitung Ihrer Aufnahmen.' },
          ].map((item) => (
            <motion.div key={item.step} variants={itemVariants} className="text-center group">
              <span className="text-5xl font-light text-neutral-200 mb-4 block group-hover:text-neutral-300 transition-colors duration-500">
                {item.step}
              </span>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={itemVariants}
              className={`relative ${pkg.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 z-10 shadow-lg">
                  Beliebt
                </div>
              )}
              <div className={`h-full bg-white border ${pkg.popular ? 'border-neutral-900 shadow-2xl' : 'border-neutral-200'} p-8 flex flex-col transition-all duration-500 hover:border-neutral-400`}>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-neutral-50 flex items-center justify-center">
                    <pkg.icon className="w-7 h-7 text-neutral-600" />
                  </div>
                  <h3 className="text-2xl font-light text-neutral-900 mb-2 font-serif">{pkg.name}</h3>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-lg text-neutral-400 font-light">€</span>
                    <span className="text-5xl font-light text-neutral-900">{pkg.price}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-6 mb-8 text-xs text-neutral-500 border-y border-neutral-100 py-4 uppercase tracking-tighter">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Images className="w-3.5 h-3.5" />
                    <span>{pkg.images}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                      <Check className="w-4 h-4 text-neutral-900 mt-0.5 flex-shrink-0 opacity-70" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 font-medium tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${pkg.popular
                      ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                      : 'bg-neutral-50 text-neutral-900 border border-neutral-200 hover:bg-neutral-900 hover:text-white hover:border-neutral-900'
                    }`}
                >
                  <span>Anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-neutral-900 text-white p-10 lg:p-16 text-center relative overflow-hidden group shadow-2xl"
        >
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-light mb-4 font-serif">
              Keines der Pakete passt genau?
            </h3>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
              Für besondere Projekte, Events oder kommerzielle Shootings erstelle ich Ihnen gerne ein
              maßgeschneidertes Angebot. Lassen Sie uns über Ihre Vision sprechen.
            </p>
            <button
              className="inline-flex items-center gap-3 bg-white text-neutral-900 px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-100 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <span>Individuelles Angebot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;