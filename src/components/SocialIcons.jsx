import { socialIcons } from '../lib/data';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      {Object.entries(socialIcons).map(
        ([name, { icon: IconComponent, color, link }]) => (
          <a
            key={name}
            href={link}
            aria-label={name}
            className={`text-2xl pt-2 rounded-full transition-all duration-300 ease-in-out 
              hover:scale-125 hover:-rotate-6 hover:opacity-90 
              ${color} `}
          >
            <IconComponent />
          </a>
        )
      )}
    </div>
  );
};

export default SocialIcons;
