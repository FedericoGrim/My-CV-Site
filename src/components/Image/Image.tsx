'use client';

import React from 'react';
import Image from 'next/image';
import { ImageProps } from './ImageProps';

export const MyImage: React.FC<ImageProps> = ({
  src,
  alt = "Image description",
  width,
  height,
  fill = false,  // Usa fill per indicare il layout
  objectFit = 'cover',  // Default objectFit
  className = "",
  divClassName = "",
}) => {
  return (
    <div className={`relative ${divClassName}`}>
      <Image
        src={src}
        alt={alt}
        // Usa fill se specificato, altrimenti usa width e height
        {...(fill ? { fill: true } : { width, height })}
        style={{ objectFit }}  // Usa objectFit come stile inline
        className={className}
      />
    </div>
  );
};
