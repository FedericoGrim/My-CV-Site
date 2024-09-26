'use client';

import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from './ButtonProps';

export const MyButton: React.FC<ButtonProps> = ({ 
  variant = "text", 
  download = "", 
  href = "", 
  text = "TEXT", 
  className 
}) => {
  return (
    <Button
      variant={variant}
      className={className}
      component="a"
      href={href}
      download={download || true} // Imposta il nome del file o consenti il comportamento di default
    >
      {text}
    </Button>
  );
};
