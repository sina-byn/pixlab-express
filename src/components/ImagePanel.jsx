import React from 'react';
import Canvas from './Canvas';

const ImagePanel = () => {
  return (
    <main className='image-panel h-full w-full grid bg-primary-dark overflow-hidden'>
      <Canvas />
    </main>
  );
};

export default ImagePanel;
