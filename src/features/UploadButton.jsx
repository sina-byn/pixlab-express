// * hooks
import useImage from '../hooks/useImage';

// * mantine
import { Button, FileButton } from '@mantine/core';

// * icons
import { IconUpload } from '@tabler/icons-react';

// * utils
import { readImage } from '../utils';

const UploadButton = () => {
  const { setImage } = useImage();

  const changeHandler = image => readImage(image, setImage);

  return (
    <FileButton onChange={changeHandler} accept='image/png,image/jpeg'>
      {props => (
        <Button
          fullWidth
          variant='outline'
          className='px-2'
          rightSection={<IconUpload width={18} />}
          {...props}
        >
          Upload image
        </Button>
      )}
    </FileButton>
  );
};

export default UploadButton;
