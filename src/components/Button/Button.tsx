'use client';

import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from './ButtonProps';

export const MyButton: React.FC<ButtonProps> = ({ variant, text, className }) => {
  return (
    <Button variant={variant} className={className}>
      {text}
    </Button>
  );
};
