// * mantine
import { Divider, Stack } from '@mantine/core';

// * components
import DeleteImageButton from './DeleteImageButton';
import ResetImageButton from './ResetImageButton';

const ImageControls = () => {
  return (
    <>
      <Divider my='md' />
      <Stack gap='xs'>
        <ResetImageButton />
        <DeleteImageButton />
      </Stack>
    </>
  );
};

export default ImageControls;
