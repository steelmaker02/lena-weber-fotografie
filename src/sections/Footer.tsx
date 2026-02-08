import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { ImpressumModal } from '@/components/ImpressumModal';
import { DatenschutzModal } from '@/components/DatenschutzModal';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-neutral-400">
          <ImpressumModal>
            <button className="hover:text-white transition-colors cursor-pointer">Impressum</button>
          </ImpressumModal>

          <span className="text-neutral-600">|</span>

          <DatenschutzModal>
            <button className="hover:text-white transition-colors cursor-pointer">Datenschutz</button>
          </DatenschutzModal>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-neutral-800">

          <div className="text-center md:text-left">
            <span className="text-xl font-serif font-light">Lena Weber</span>
            <p className="text-sm text-neutral-400 mt-2">
              © 2026 Lena Weber Fotografie. Alle Rechte vorbehalten.
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-sm">Nach oben</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;