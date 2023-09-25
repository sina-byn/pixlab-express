import { useRef } from 'react';

// * hooks
import useImage from '../hooks/useImage';

// * mantine
import { Button, FileButton } from '@mantine/core';
import { notifications } from '@mantine/notifications';

// * icons
import { IconUpload } from '@tabler/icons-react';

// * utils
import { readImage } from '../utils';

const UploadButton = () => {
  const { updateImage } = useImage();
  const resetRef = useRef(null);

  const changeHandler = image => {
    if (resetRef.current) resetRef.current();

    if (image.size > 10 * 1024 ** 2) {
      return notifications.show({
        message: 'image size should not exceed 10mb',
        classNames: {
          root: 'bg-primary-dark w-fit border-red-200 rounded-sm py-1',
          description: 'text-gray-200',
          closeButton: 'hover:bg-blue-500 hover:text-primary-dark',
        },
        closeButtonProps: { 'aria-label': 'Hide notification' },
      });
    }

    readImage(image, updateImage);
  };

  return (
    <FileButton resetRef={resetRef} onChange={changeHandler} accept='image/png,image/jpeg'>
      {props => (
        <Button fullWidth className='px-2' rightSection={<IconUpload width={18} />} {...props}>
          Upload image
        </Button>
      )}
    </FileButton>
  );
};

export default UploadButton;
