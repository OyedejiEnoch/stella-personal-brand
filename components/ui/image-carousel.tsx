'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselImage {
  src: string;
  alt: string;
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
};

const SWIPE_THRESHOLD = 60;

/**
 * Smooth, swipeable single-image carousel with a soft blurred backdrop of the
 * active image, arrows, and dots. Designed for portrait screenshots.
 */
export default function ImageCarousel({ images }: { images: CarouselImage[] }) {
  // [activeIndex, direction] — direction drives the slide animation
  const [[index, direction], setState] = React.useState<[number, number]>([0, 0]);
  const count = images.length;

  const paginate = React.useCallback(
    (dir: number) => {
      setState(([prev]) => [(prev + dir + count) % count, dir]);
    },
    [count]
  );

  const goTo = (target: number) => {
    setState(([prev]) => [target, target > prev ? 1 : -1]);
  };

  const active = images[index];

  return (
    <div className="relative">
      {/* Ambient blurred backdrop of the current screenshot */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={`bg-${index}`}
            src={active.src}
            alt=""
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="h-[440px] w-full scale-110 object-cover blur-3xl sm:h-[520px]"
          />
        </AnimatePresence>
        {/* soften the backdrop into the section */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative flex items-center justify-center gap-2 sm:gap-4">
        {/* Prev */}
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Previous"
          className="z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-primary/10 bg-white text-brand-primary shadow-sm transition-all hover:scale-105 hover:bg-brand-primary hover:text-white sm:flex"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Stage */}
        <div className="relative flex h-[440px] w-full items-center justify-center sm:h-[520px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 280, damping: 32 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -500) {
                  paginate(1);
                } else if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > 500) {
                  paginate(-1);
                }
              }}
              className="absolute flex h-full cursor-grab items-center justify-center active:cursor-grabbing"
            >
              <img
                src={active.src}
                alt={active.alt}
                draggable={false}
                className="max-h-full w-auto select-none rounded-2xl border border-black/5 bg-white object-contain shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = `https://picsum.photos/seed/${encodeURIComponent(
                    active.src
                  )}/680/1000`;
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Next"
          className="z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-primary/10 bg-white text-brand-primary shadow-sm transition-all hover:scale-105 hover:bg-brand-primary hover:text-white sm:flex"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Mobile arrows + dots */}
      <div className="relative mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Previous"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/10 bg-white text-brand-primary shadow-sm transition-colors hover:bg-brand-primary hover:text-white sm:hidden"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-6 bg-brand-primary'
                  : 'w-2 bg-brand-primary/25 hover:bg-brand-primary/50'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Next"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/10 bg-white text-brand-primary shadow-sm transition-colors hover:bg-brand-primary hover:text-white sm:hidden"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
