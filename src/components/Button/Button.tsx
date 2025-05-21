'use client';

import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from './ButtonProps';

export const MyButton: React.FC<ButtonProps> = ({ 
  variant = "text", 
  download = "", 
  href = "", 
  text = "TEXT", 
  className,
  onClick
}) => {
  let buttonProps: any = {
    variant,
    className,
    component: "a",
    children: text
  };

  if (download !== "") {
    buttonProps.download = download || true;
    buttonProps.href = href;
  } else if (onClick) {
    buttonProps.onClick = onClick;
  } else if (href) {
    buttonProps.href = href;
  }

  return <Button {...buttonProps} />;
};
