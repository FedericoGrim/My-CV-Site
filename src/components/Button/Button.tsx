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
    <>
      {download !== "" ? (
        <Button
          variant={variant}
          className={className}
          component="a"
          download={download || true} 
        >
          {text}
        </Button> 
      ) : (
        <Button
          variant={variant}
          className={className}
          component="a"
          href={href}
        >
          {text}
        </Button> 
      )}
    </>
  );
};
