import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote, Star, MapPin } from 'lucide-react';

import testimonialsData from '../data/testimonials.json';

const testimonials = testimonialsData;
const AUTOPLAY_MS = 7000;

// Unsplash URLs in the data have no size params; request a sensible crop
const sized = (url: string, w: number) =>
  url.includes('images.unsplash.com') && !url.includes('?')
    ? `${url}?auto=format&fit=crop&w=${w}&q=80`
    : url;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

export const Testimonials = () => {
  const [[currentIndex, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;
  const current = testimonials[currentIndex];

  const paginate = useCallback((dir: number) => {
    setSlide(([i]) => [(i + dir + total) % total, dir]);
  }, [total]);

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    setSlide([index, index > currentIndex ? 1 : -1]);
  };

  // Autoplay (restarts whenever the slide changes)
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => paginate(1), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, paginate]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') paginate(1);
    if (e.key === 'ArrowLeft') paginate(-1);
  };

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[140px]" />
      <Quote className="pointer-events-none absolute top-16 right-[8%] w-64 h-64 text-primary/[0.04] fill-current hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 md:mb-20 gap-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-primary uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Client Stories
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-neutral tracking-tight">
              Voices of Trust
            </h2>
            <p className="text-neutral/50 mt-4 text-base md:text-lg leading-relaxed">
              Homeowners and business leaders share what it's like to build with Skyyroot.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="font-serif text-neutral tabular-nums">
              <span className="text-3xl">{pad(currentIndex + 1)}</span>
              <span className="text-neutral/30 text-lg"> / {pad(total)}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-neutral/15 bg-white text-neutral flex items-center justify-center shadow-sm hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-neutral hover:shadow-neutral/20 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide card */}
        <div className="relative bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] border border-neutral/5 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1);
                else if (info.offset.x > 80) paginate(-1);
              }}
              className="grid grid-cols-1 lg:grid-cols-12 cursor-grab active:cursor-grabbing select-none"
              aria-live="polite"
            >
              {/* Image */}
              <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-auto lg:min-h-[520px]">
                <img
                  src={sized(current.image, 900)}
                  alt={current.author}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral/70 via-neutral/10 to-transparent" />

                {/* Rating badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-2xl px-5 py-3 shadow-xl">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < current.rating ? 'text-amber-400 fill-current' : 'text-neutral/15'}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-neutral/60">{current.rating}.0 Client Rating</p>
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <Quote className="w-6 h-6 text-primary fill-current" />
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral leading-tight mb-6">
                  {current.quote}
                </h3>

                <p className="text-neutral/60 text-base md:text-lg leading-relaxed max-w-2xl">
                  {current.text}
                </p>

                <div className="mt-10 pt-8 border-t border-neutral/10 flex items-center gap-4">
                  <img
                    src={sized(current.image, 120)}
                    alt=""
                    draggable={false}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-primary/10"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-neutral">{current.author}</h4>
                    <p className="text-primary text-sm font-medium">{current.role}</p>
                  </div>
                  <div className="ml-auto hidden sm:flex items-center gap-1.5 text-neutral/40 text-sm">
                    <MapPin className="w-4 h-4" />
                    {current.location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Autoplay progress */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral/5">
            <motion.div
              key={`${currentIndex}-${isPaused}`}
              className="h-full bg-primary origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isPaused ? 0 : 1 }}
              transition={{ duration: isPaused ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }}
            />
          </div>
        </div>

        {/* Avatar navigation */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              aria-label={`Show testimonial from ${t.author}`}
              aria-current={i === currentIndex}
              className={`relative rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'ring-2 ring-primary ring-offset-4 ring-offset-gray-50 scale-110'
                  : 'opacity-50 grayscale hover:opacity-100 hover:grayscale-0'
              }`}
            >
              <img
                src={sized(t.image, 120)}
                alt={t.author}
                className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
