import React from 'react';
import { LabelProps } from './LabelProps';

export const Label: React.FC<LabelProps> = ({ 
    text, 
    className 
}) => {

  return (
    <div 
      className={className}
    >
        <span className={className} >
          {text}
        </span>
    </div>
  );
};

export default Label;