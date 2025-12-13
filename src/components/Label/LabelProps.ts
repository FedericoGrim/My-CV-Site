import type { ReactNode } from 'react';

export type LabelProps = {
    text?: ReactNode; //il testo che vuoi scrivere    
    className?: string; //stile del testo
    font?: string; //il font che vuoi usare tra quelli che hai importato nel file LabelFonts
  };