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
