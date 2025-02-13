import { title } from 'framer-motion/client';
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const links = [
  { href: '/retail', label: 'Retail' },
  { href: '/sem', label: 'Sem' },
  { href: '/corporate', label: 'Corporate' },
  { href: '/campaigns', label: 'Campaigns' },
  { href: '/loans', label: 'Loans' },
  { href: '/mobile-banking', label: 'Mobile Banking' },
  { href: '/payments', label: 'Payments' },
];

export const socialIcons = {
  facebook: {
    icon: FaFacebook,
    color: 'text-blue-600 hover:text-blue-800',
    link: 'https://www.facebook.com',
  },
  youtube: {
    icon: FaYoutube,
    color: 'text-red-600 hover:text-red-800',
    link: 'https://www.youtube.com',
  },
  linkedin: {
    icon: FaLinkedin,
    color: 'text-blue-500 hover:text-blue-700',
    link: 'https://www.linkedin.com',
  },
  instagram: {
    icon: FaInstagram,
    color: 'text-pink-600 hover:text-pink-800',
    link: 'https://www.instagram.com',
  },
};

export const heroData = {
  title: 'Chase Your Dream with us',
  description:
    'Experience banking that empowers your dreams—secure, seamless, and built for you.',
};

export const featuresData = {
  title: 'Creating Extraordinary Customer Experience',
  subtitle:
    'We strive to create exceptional experiences that connect and inspire our customers every day',
  features: [
    {
      title: 'Integrity',
      description:
        'Upholding honesty and transparency in every aspect of our business.',
      icon: '🛡️',
    },
    {
      title: 'Demonstrate',
      description:
        'Striving for excellence and a strong will to lead in the marketplace.',
      icon: '🎯',
    },
    {
      title: 'Diversity',
      description:
        'Fostering an inclusive environment that values diverse perspectives.',
      icon: '🌍',
    },
    {
      title: 'Teamwork',
      description: 'Collaborating effectively to drive collective success.',
      icon: '🤝',
    },
    {
      title: 'Collaboration',
      description: 'Building strong partnerships to achieve shared goals.',
      icon: '🔗',
    },
    {
      title: 'Technology',
      description: 'Leveraging innovation to enhance customer experiences.',
      icon: '💡',
    },
    {
      title: 'Corporate',
      description:
        'Committed to responsible corporate practices and community engagement.',
      icon: '🏢',
    },
    {
      title: 'Digital',
      description:
        'Embracing digital transformation to provide seamless banking solutions.',
      icon: '📱',
    },
  ],
};

export const images = [
  '/assets/exp.png',
  '/assets/exp.png',
  '/assets/exp.png',
  '/assets/exp.png',
  '/assets/exp.png',
  '/assets/exp.png',
  '/assets/exp.png',
  '/assets/exp.png',
];

export const serviceData = {
  title: 'Our Services',
  description:
    'Explore our comprehensive banking services, including Retail Banking, SME Solutions, Corporate Banking, Loans, Mobile Banking, and Secure Payments, tailored to fit your financial needs.',
  services: [
    {
      title: 'FBC SAVING SCHEMES',
      image: '/assets/service1.webp',
    },
    {
      title: 'FBC PERSONAL LOAN',
      image: '/assets/service2.webp',
    },
    {
      title: 'FBC DEPOSIT SCHEMES',
      image: '/assets/service3.webp',
    },
    {
      title: 'FBC AUTO LOAN',
      image: '/assets/service4.webp',
    },
  ],
};

export const resultData = {
  title: 'Our Results',
  description:
    'Discover the impact of our commitment to excellence and innovation. Explore our achievements and the positive impact we bring to our clients and communities.',
  results: [
    { value: '65.2 bn', label: 'Loan Portfolio', highlight: true },
    { value: '1.10%', label: 'Classified Loan Portfolio' },
    { value: '410.3%', label: 'Classified Loan Coverage' },
    { value: '55.8 bn', label: 'Deposit' },
    { value: '7.3 bn', label: 'Shareholders Equity' },
    { value: '19.2%', label: 'Capital Adequacy Ratio' },
    { value: '9.2 bn', label: 'Market Capitalization' },
    { value: 'AAA', label: 'Credit Rating', highlight: true },
  ],
};

export const newsLetterData = {
  title: 'Newsletter',
  description:
    'Stay updated with the latest financial insights, exclusive offers, and banking innovations. Subscribe now to receive updates directly to your inbox.',
};

export const footerData = {
  aboutCompany: {
    title: 'About the Company',
    description:
      'Empowering financial growth with innovation and trust. Explore our services and commitments.',
  },
  sections: [
    {
      title: 'Our Services',
      links: [
        'Retail Banking',
        'Corporate Banking',
        'SME Banking',
        'Digital Banking',
        'Wealth Management',
      ],
    },
    {
      title: 'Resources',
      links: [
        'Career Opportunities',
        'Contact Us',
        'Government Securities',
        'Financial Reports',
        'Investor Relations',
      ],
    },
    {
      title: 'Company Info',
      links: [
        'About Us',
        'Mission, Vision & Values',
        'Corporate Governance',
        'Sustainability Initiatives',
        'Shareholder Information',
      ],
    },
  ],
  contact: {
    phone: '16845',
    email: 'support@fbcbankingservice.com',
    address: '123 Finance Street, City, Country',
  },
};
