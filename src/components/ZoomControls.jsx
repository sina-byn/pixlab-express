// * react-zoom-pan-pinch
import { useControls } from 'react-zoom-pan-pinch';

// * components
import { ActionIcon } from '@mantine/core';

// * icons
import { IconZoomIn, IconZoomOut, IconZoomPan, IconZoomReset } from '@tabler/icons-react';

const ZoomControls = () => {
  const { zoomIn, zoomOut, resetTransform, zoomToElement } = useControls();

  const zoomInHandler = () => zoomIn();
  const zoomOutHandler = () => zoomOut();
  const zoomToHandler = () => zoomToElement('image-canvas');
  const resetHandler = () => resetTransform();

  return (
    <div className='zoom-controls flex items-center fixed md:absolute bottom-4 right-4 z-30 bg-primary rounded-sm overflow-hidden'>
      <ActionIcon
        size='lg'
        title='zoom out'
        variant='subtle'
        onClick={zoomOutHandler}
        className='border-0'
      >
        <IconZoomOut width={18} />
      </ActionIcon>
      <ActionIcon
        size='lg'
        title='zoom in'
        variant='subtle'
        onClick={zoomInHandler}
        className='border-0'
      >
        <IconZoomIn width={18} />
      </ActionIcon>
      <ActionIcon
        size='lg'
        title='zoom reset'
        variant='subtle'
        onClick={resetHandler}
        className='border-0'
      >
        <IconZoomReset width={18} />
      </ActionIcon>
      <ActionIcon
        size='lg'
        title='zoom to'
        variant='subtle'
        onClick={zoomToHandler}
        className='border-0'
      >
        <IconZoomPan width={18} />
      </ActionIcon>
    </div>
  );
};

export default ZoomControls;
