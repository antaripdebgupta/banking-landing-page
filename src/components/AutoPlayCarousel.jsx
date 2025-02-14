import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AutoPlayCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [slidesPerView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const maxIndex = images.length - slidesPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, slidesPerView]);

  const translateX = -currentIndex * (100 / slidesPerView);

  return (
    <div className="overflow-hidden relative w-full pb-8">
      <motion.div
        className="flex"
        animate={{ x: `${translateX}%` }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.8,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-2"
            style={{ width: `${100 / slidesPerView}%` }}
          >
            <div className="relative h-20 sm:h-24">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: images.length - slidesPerView + 1 }).map(
          (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-green-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label="play"
            />
          )
        )}
      </div>
    </div>
  );
};

export default AutoPlayCarousel;
