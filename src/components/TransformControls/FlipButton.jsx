// * hooks
import useImageTransform from '../../hooks/useImageTransform';

// * mantine
import { ActionIcon } from '@mantine/core';

// * icons
import { IconFlipVertical, IconFlipHorizontal } from '@tabler/icons-react';

const FlipButton = ({ axis }) => {
  const { flipImage } = useImageTransform();
  const title = axis === 'y' ? 'flip horizontally' : 'flip vertically';

  const flipHandler = () => flipImage(axis);

  return (
    <ActionIcon size='lg' title={title} onClick={flipHandler}>
      {axis === 'y' ? <IconFlipHorizontal width={18} /> : <IconFlipVertical width={18} />}
    </ActionIcon>
  );
};

export default FlipButton;
