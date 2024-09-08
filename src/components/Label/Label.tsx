import React from 'react';
import { LabelProps } from './LabelProps';
import { fonts, FontKey } from './LabelFonts'; // Importa i font e il tipo FontKey

export const Label: React.FC<LabelProps & { font?: FontKey }> = ({ 
    text = "TEXT", 
    className,
    font // Nessun valore di default per font
}) => {

  // Se è stato passato un font, usalo, altrimenti usa il font di sistema (nessun font specifico)
  const fontClassName = font ? fonts[font] : '';

  return (
    <div className={`${className} ${fontClassName}`}>
      <span className={`${className} ${fontClassName}`}>
        {text}
      </span>
    </div>
  );
};

export default Label;
