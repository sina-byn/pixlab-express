import { useRef, useEffect } from 'react';

// * hooks
import useImageContext from '../hooks/useImageContext';

// * react-zoom-pan-pinch
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

// * components
import ZoomControls from './ZoomControls';

// * utils
import { drawImage } from '../utils';

const Canvas = () => {
  const { image, filters, imageTransform } = useImageContext();
  const transformComponentRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!image.dataURL) return;
    const { centerView } = transformComponentRef.current;

    drawImage(canvasRef.current, image, {});
    centerView(1);
  }, [image.dataURL, canvasRef.current]);

  useEffect(() => {
    if (!image.dataURL) return;
    const { centerView } = transformComponentRef.current;

    drawImage(canvasRef.current, image, { ...imageTransform, filters });
    centerView();
  }, [filters, imageTransform, canvasRef.current]);

  return (
    <div className='canvas-wrap w-full h-full bg-primary-dark overflow-hidden'>
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
    </div>
  );
};

export default Canvas;
