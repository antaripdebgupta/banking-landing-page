import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MoreServicesButton = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState([]);
  const [hiddenLinks, setHiddenLinks] = useState([]);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (links.length <= 2) {
        setVisibleLinks(links);
        setHiddenLinks([]);
        return;
      }

      if (window.innerWidth > 1300) {
        setVisibleLinks(links);
        setHiddenLinks([]);
      } else if (window.innerWidth > 800 && window.innerWidth <= 1300) {
        setVisibleLinks(links.slice(0, 3));
        setHiddenLinks(links.slice(3));
      } else {
        setVisibleLinks(links.slice(0, 2));
        setHiddenLinks(links.slice(2));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [links]);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = e => {
    const { relatedTarget } = e;
    const button = buttonRef.current;
    const dropdown = dropdownRef.current;

    if (
      !relatedTarget ||
      (!button?.contains(relatedTarget) && !dropdown?.contains(relatedTarget))
    ) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {visibleLinks.map(link => (
        <a
          key={link.href}
          href={link.href}
          className="nav-link ml-4 text-lg text-nowrap text-black uppercase"
        >
          {link.label}
        </a>
      ))}
      {hiddenLinks.length > 0 && (
        <div
          className="relative inline-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={buttonRef}
        >
          <button
            className="text-lg ml-4 text-black flex items-center uppercase"
            onClick={handleClick}
          >
            More
            {isOpen ? (
              <FaChevronUp className="inline-block ml-1" />
            ) : (
              <FaChevronDown className="inline-block ml-1" />
            )}
          </button>

          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50"
            >
              {hiddenLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block uppercase px-4 py-2 text-black hover:bg-gray-200 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MoreServicesButton;
