import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from '../../lib/data';

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden p-2 text-gray-700 fixed top-4 right-4 z-50"
        onClick={() => setIsOpen(true)}
        whileTap={{ scale: 0.95 }}
      >
        <FiMenu size={28} />
      </motion.button>

      {/* Animated Overlay and Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50"
            >
              {/* Close Button */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Menu</h2>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={24} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <motion.nav
                className="flex flex-col p-4 space-y-3"
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                {links.map(link => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block p-2 text-gray-700 rounded-lg transition-colors duration-300 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                    variants={linkVariants}
                    whileHover={{ x: 8 }}
                    transition={{ type: 'tween' }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
