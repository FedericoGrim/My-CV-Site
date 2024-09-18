'use client';

import React from 'react';
import Image from 'next/image';
import { ImageProps } from './ImageProps';

export const MyImage: React.FC<ImageProps> = ({
  src,
  alt,  
  width,
  height,
  fill = false,
  objectFit = 'cover',
  className = "",
  divClassName = "",
  divImageStyle = {},
  priority = false,
  unoptimized = false,
  sizes, 
  placeholder = 'empty',  
  blurDataURL,  
}) => {
  return (
    <div className={`relative ${divClassName}`} style={divImageStyle}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit }}
          className={className}
          priority={priority}
          unoptimized={unoptimized}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          sizes={sizes}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={priority}
          unoptimized={unoptimized}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          sizes={sizes}
        />
      )}
    </div>
  );
};
