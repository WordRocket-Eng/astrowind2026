import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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
        { text: 'Power Generation', href: '#' },
        { text: 'Highway & Road Construction', href: '#' },
        { text: 'Building Design & Construction', href: '#' },
        { text: 'Net-Zero Solar & Wind', href: '#' },
        { text: 'Drainage & Irrigation', href: '#' },
        { text: 'Water Distribution', href: '#' },
      ],
    },
    {
      title: 'Resources',
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
