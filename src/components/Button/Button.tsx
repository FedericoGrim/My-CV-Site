'use client';

import React from 'react';
import Button from '@mui/material/Button';

export interface ButtonProps {
  href?: string;
  download?: string;
  className?: string;
  variant?: 'text' | 'outlined' | 'contained';
  text?: string;
  onClick?: () => void;
  ariaLabel?: string;
  title?: string;
  children?: React.ReactNode;
}

export const MyButton: React.FC<ButtonProps> = ({
  variant = "text",
  download,
  href,
  text,
  className,
  onClick,
  ariaLabel,
  title,
  children
}) => {

  const buttonProps: any = {
    variant,
    className,
    component: href || download ? "a" : "button",
    children: children ?? text   // ⭐ LINEA CHIAVE
  };

  if (ariaLabel) buttonProps['aria-label'] = ariaLabel;
  if (title) buttonProps.title = title;

  if (download) {
    buttonProps.download = download === "" ? true : download;
    buttonProps.href = href;
  } 
  else if (onClick) {
    buttonProps.onClick = onClick;
  } 
  else if (href) {
    buttonProps.href = href;
  }

  return <Button {...buttonProps} />;
};
