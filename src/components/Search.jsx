import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center space-x-2">
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'w-40 opacity-100' : 'w-0 opacity-0'
        }`}
      >
        <input
          type="text"
          placeholder="Search for services..."
          className="sm:min-w-44 px-3 py-2 border-b-2 border-gray-300 focus:outline-none w-full transition-all duration-300 ease-in-out focus:border-green-300 focus:scale-105 focus:shadow-lg"
        />
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full transition"
        aria-label="search"
      >
        <FaSearch className="text-green-700 text-2xl" />
      </button>
    </div>
  );
}
