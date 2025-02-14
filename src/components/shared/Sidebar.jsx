import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { links } from '../../lib/data';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-gray-700 fixed top-4 right-4 z-50"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu size={28} />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar (From Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        {/* Navigation Links with Hover Animation */}
        <nav className="flex flex-col p-4 space-y-3">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block p-2 text-gray-700 rounded-lg transition duration-300 hover:bg-gray-100 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
