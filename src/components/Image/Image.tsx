'use client';

import React from 'react';
import Image from 'next/image';
import { ImageProps } from './ImageProps';

export const MyImage: React.FC<ImageProps> = ({ 
    src, 
    alt = "None", 
    width = 50, 
    height = 50
 }) => {
  return (
    <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
    />
    );
};
