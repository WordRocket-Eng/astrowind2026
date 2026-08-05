import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Capabilities', href: getPermalink('/capabilities') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'Request a Quote', href: getPermalink('/contact'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Capabilities', href: getPermalink('/capabilities') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'Engineering Design & Consultancy', href: '/services#engineering-design' },
        { text: 'Power Generation Solutions', href: '/services#power-generation' },
        { text: 'Highway & Road Construction', href: '/services#highway-road-construction' },
        { text: 'Building Design & Construction', href: '/services#building-design-construction' },
        { text: 'Net-Zero Solar & Wind', href: '/services#net-zero-solar-wind' },
        { text: 'Schools & Public Infrastructure', href: '/services#schools-public-infrastructure' },
        { text: 'Drainage & Irrigation', href: '/services#drainage-irrigation' },
        { text: 'Water Distribution & Wells', href: '/services#water-distribution' },
      ],
    },
    {
      title: 'Get in Touch',
      links: [
        { text: 'Request a Quote', href: getPermalink('/contact') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} EIKON Guyana Inc. · Innovative Ideas, Solutions & Results.
  `,
};
