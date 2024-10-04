import { Teko, Roboto, Inter, Merriweather } from 'next/font/google';

// Inizializza i font con i subset e i pesi specificati
const teko = Teko({ subsets: ['latin'], weight: '700' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'], weight: '400' });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'], style: ['normal', 'italic'] });

// Definisci il tipo per le chiavi dei font
export type FontKey = 'teko' | 'roboto' | 'inter' | 'merriweather';

// Esporta le classi dei font per essere utilizzate nei componenti
export const fonts = {
  teko: teko.className,
  roboto: roboto.className,
  inter: inter.className,
  merriweather: merriweather.className,
};
