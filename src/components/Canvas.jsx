import { useRef, useEffect } from 'react';

// * hooks
import useImage from '../hooks/useImage';
import useFilter from '../hooks/useFilter';
import useImageTransform from '../hooks/useImageTransform';

// * react-zoom-pan-pinch
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

// * components
import ZoomControls from './ZoomControls';

// * utils
import { drawImage } from '../utils';

const Canvas = () => {
  const { image } = useImage();
  const { filters } = useFilter();
  const { imageTransform } = useImageTransform();
  const transformComponentRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!image.dataURL) return;
    const canvas = canvasRef.current;

    drawImage(canvas, image, { ...imageTransform, filters });
  }, [image, filters, imageTransform, canvasRef.current]);

  useEffect(() => {
    if (!image.dataURL) return;
    const { centerView } = transformComponentRef.current;
    
    centerView(1);
  }, [image.dataURL, canvasRef.current]);

  return (
    <TransformWrapper
      smooth
      limitToBounds
      initialScale={1}
      minScale={0.25}
      ref={transformComponentRef}
    >
      <ZoomControls />
      <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
        {image.dataURL && <canvas id='image-canvas' ref={canvasRef} />}
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Canvas;
