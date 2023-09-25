// * hooks
import useImage from '../../hooks/useImage';

// * mantine
import { Button } from '@mantine/core';

// * icons
import { IconRotate2 } from '@tabler/icons-react';

const ResetImageButton = () => {
  const { resetImage } = useImage();

  return (
    <Button onClick={resetImage} leftSection={<IconRotate2 width={18} height={18} />}>
      Reset Changes
    </Button>
  );
};

export default ResetImageButton;
