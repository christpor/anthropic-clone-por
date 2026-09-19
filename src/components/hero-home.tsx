import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROTATING_WORDS = ['products', 'research', 'systems'];

interface HeroHomeProps {
  onNavigate: (route: string) => void;
}

export function HeroHome({ onNavigate }: HeroHomeProps) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 pt-10 sm:pt-16 pb-16">
      {/* Top Split Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
        {/* Left: Dynamic Rotating Headline */}
        <div className="lg:col-span-7">
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-medium tracking-[-0.03em] leading-[1.08] text-[#191919]">
            AI{' '}
            <span className="relative inline-flex items-baseline overflow-hidden h-[1.15em] align-top">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[wordIndex]}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -32 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-semibold underline decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8 decoration-[#191919]"
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            that put safety at the frontier
          </h1>
        </div>

        {/* Right: Public Benefit Statement */}
        <div className="lg:col-span-5 lg:pt-4">
          <p className="font-editorial text-xl sm:text-2xl lg:text-[26px] leading-[1.35] text-[#191919]">
            AI will have a vast impact on the world. Anthropic is a public benefit corporation
            dedicated to securing its benefits and mitigating its risks.
          </p>
        </div>
      </div>

      {/* Flagship Sky Feature Card: Claude Fable 5.1 & Mythos 5.1 */}
      <div
        onClick={() => onNavigate('/claude-fable-and-mythos-5-1')}
        className="group relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-3xl sm:rounded-[36px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#5b83b3]"
      >
        {/* Cloud Atmosphere Artwork */}
        <img
          src="/assets/images/hero_cloud_poster.png"
          alt="Claude Fable 5.1 and Mythos 5.1 atmospheric cloudscape"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Subtle Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Floating Atmospheric Typography */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 max-w-3xl"
          >
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-white drop-shadow-md">
              Claude Fable 5.1 and Mythos 5.1
            </h2>
            <p className="font-editorial text-base sm:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto drop-shadow-sm">
              The world's most advanced models for coding and knowledge work.
            </p>
          </motion.div>
        </div>

        {/* Hover Cue */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-medium border border-white/30">
            Read announcement →
          </span>
        </div>
      </div>
    </section>
  );
}
