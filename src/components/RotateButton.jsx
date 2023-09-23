// * hooks
import useImageTransform from '../hooks/useImageTransform';

// * mantine
import { ActionIcon } from '@mantine/core';

// * icons
import { IconRotate, IconRotateClockwise } from '@tabler/icons-react';

const RotateButton = ({ dir }) => {
  const { rotateImage } = useImageTransform();

  const rotateHandler = () => rotateImage(dir);

  return (
    <ActionIcon size='lg' variant='subtle' title={`rotate ${dir}`} onClick={rotateHandler}>
      {dir === 'right' ? <IconRotate width={18} /> : <IconRotateClockwise width={18} />}
    </ActionIcon>
  );
};

export default RotateButton;
