import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HoverEffect = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 max-w-6xl mx-auto px-6 relative">
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-4 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Hover Background Effect*/}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                layoutId="hoverBackground"
                className="absolute inset-0 h-full w-full bg-neutral-200/60 rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1.02 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            )}
          </AnimatePresence>

          {/* Feature Card */}
          <div className="relative z-10 rounded-xl h-full w-full p-2 sm:p-4 border-2 border-slate-400 bg-white">
            <div className="text-4xl mb-2 sm:mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900mb-1">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverEffect;
