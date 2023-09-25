// * hooks
import useImage from '../../hooks/useImage';

// * mantine
import { Button } from '@mantine/core';

// * icons
import { IconTrash } from '@tabler/icons-react';

const DeleteImageButton = () => {
  const { deleteImage } = useImage();

  return (
    <Button onClick={deleteImage} leftSection={<IconTrash width={18} height={18} />}>
      Delete Image
    </Button>
  );
};

export default DeleteImageButton;
