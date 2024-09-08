import { Teko, Roboto, Inter } from 'next/font/google';

const teko = Teko({ subsets: ['latin'], weight: '700' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'], weight: '400' });

// Definisci il tipo per le chiavi dei font che verranno mostrate da tailwind quando crei la label e gli aggiungi il font=""
export type FontKey = 'teko' | 'roboto' | 'inter';

export const fonts = {
  teko: teko.className,
  roboto: roboto.className,
  inter: inter.className,
};
