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

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 sm:py-32 lg:py-40 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-sm uppercase tracking-widest text-neutral-500 mb-4 block">
            Investment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 mb-6">
            Ihr persönliches Fotoshooting
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600 leading-relaxed text-lg">
            Jedes Shooting ist einzigartig – genau wie Sie. Ich erstelle Ihnen ein maßgeschneidertes Angebot, 
            das perfekt zu Ihren Wünschen und Ihrem Budget passt. Lassen Sie uns gemeinsam etwas Magisches erschaffen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Kennenlernen', desc: 'Wir besprechen Ihre Vision und Wünsche in einem unverbindlichen Gespräch.' },
              { step: '02', title: 'Konzept', desc: 'Ich entwickle ein individuelles Konzept passend zu Ihrem Stil und Anlass.' },
              { step: '03', title: 'Shooting', desc: 'Entspanntes Shooting in professioneller Atmosphäre – genießen Sie den Moment.' },
              { step: '04', title: 'Bilder', desc: 'Sorgfältige Auswahl und Bearbeitung Ihrer schönsten Aufnahmen.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <span className="text-5xl font-light text-neutral-200 mb-4 block">{item.step}</span>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`relative ${pkg.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs uppercase tracking-widest px-4 py-1">
                  Beliebt
                </div>
              )}
              <div className={`h-full bg-white border ${pkg.popular ? 'border-neutral-900 shadow-xl' : 'border-neutral-200'} p-8 flex flex-col`}>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center">
                    <pkg.icon className="w-7 h-7 text-neutral-600" />
                  </div>
                  <h3 className="text-2xl font-light text-neutral-900 mb-2">{pkg.name}</h3>
                  <p className="text-sm text-neutral-500 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-lg text-neutral-400">€</span>
                    <span className="text-5xl font-light text-neutral-900">{pkg.price}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-6 mb-6 text-sm text-neutral-600 border-y border-neutral-100 py-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Images className="w-4 h-4" />
                    <span>{pkg.images}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                      <Check className="w-4 h-4 text-neutral-900 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 font-medium tracking-wide transition-colors flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                      : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                  }`}
                >
                  <span>Anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-neutral-900 text-white p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-light mb-4">
            Keines der Pakete passt genau?
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
            Für besondere Projekte, Events oder kommerzielle Shootings erstelle ich Ihnen gerne ein 
            individuelles Angebot. Lassen Sie uns über Ihre Vision sprechen.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 font-medium tracking-wide hover:bg-neutral-100 transition-colors"
          >
            <span>Individuelles Angebot anfragen</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
