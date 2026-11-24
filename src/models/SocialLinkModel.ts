export interface SocialLink {
  id: string;
  name: string;
  url: string;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/giixz.exe/'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sergiomqs/'
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/OwTz'
  },
  {
    id: 'portfolio',
    name: 'Portfólio Pessoal',
    url: 'https://sergio-marquesdev.vercel.app/'
  }
] as const;

export const AUTHOR_DISCLAIMER = 'Página desenvolvida por Sérgio Marques ©';
