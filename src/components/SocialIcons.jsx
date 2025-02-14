import { motion } from 'framer-motion';
import { socialIcons } from '../lib/data';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      {Object.entries(socialIcons).map(
        ([name, { icon: IconComponent, color, link }]) => (
          <motion.a
            key={name}
            href={link}
            aria-label={name}
            className={`text-2xl pt-2 rounded-full ${color}`}
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.2,
              rotate: -6,
              y: -5,
              boxShadow: `0 8px 12px rgba(0,0,0,0.2)`,
              filter: 'brightness(1.2)',
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              mass: 0.5,
            }}
          >
            <IconComponent />
          </motion.a>
        )
      )}
    </div>
  );
};

export default SocialIcons;
