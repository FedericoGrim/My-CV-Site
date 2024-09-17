'use client';

import React from 'react';
import Image from 'next/image';
import { ImageProps } from './ImageProps';

export const MyImage: React.FC<ImageProps> = ({
  src,
  alt,  // Alt obbligatorio
  width,
  height,
  fill = false,
  objectFit = 'cover',
  className = "",
  divClassName = "",
  priority = false,  // Supporto per `priority`
  unoptimized = false,  // Supporto per `unoptimized`
  sizes,  // Opzionale, per immagini responsive
  placeholder = 'empty',  // Placeholder (vuoto o blur)
  blurDataURL,  // Aggiunto per le immagini sfocate
}) => {
  return (
    <div className={`relative ${divClassName}`}>
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
