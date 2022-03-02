import { ImageField } from './styles';
import React from 'react';

interface IImageProperties {
  src?: any;
  width?: any;
  height?: any;
}

const Image: React.FC<IImageProperties> = ({ src, width, height }) => {
  return (
    <ImageField
      className="image"
      style={{
        width: `${width}`,
        height: `${height}`,
      }}
      src={src}
    />
  );
};

export default Image;
