// * hooks
import useImage from '../../hooks/useImage';

// * mantine
import { Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

// * icons
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';

// * utils
import { readImage } from '../../utils';

// * data
const IMAGE_MIME_TYPE = ['image/png', 'image/jpeg'];

const ImageDropzone = () => {
  const { updateImage } = useImage();

  const dropHandler = image => {
    image = image[0];
    if (!image) return;

    readImage(image, updateImage);
  };

  return (
    <Dropzone
      multiple={false}
      onDrop={dropHandler}
      maxSize={10 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      classNames={{
        root: 'w-full h-full outline outline-2 outline-dashed outline-blue-500 -outline-offset-8',
        inner: 'flex items-center justify-center w-full h-full text-center text-gray-200 px-8',
      }}
    >
      <Group className='justify-center gap-6 pointer-events-none'>
        <Dropzone.Accept>
          <IconUpload style={{ width: 60, height: 60 }} className='text-green-500' />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX style={{ width: 60, height: 60 }} className='text-red-500' />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto style={{ width: 60, height: 60 }} className='text-gray-200' />
        </Dropzone.Idle>
        <div>
          <p className='text-xl'>Drag your image here or click to select an image</p>
          <p className='text-sm text-gray-300/60 mt-2'>
            Attach only a single image at once, each image should not exceed 10mb
          </p>
        </div>
      </Group>
    </Dropzone>
  );
};

export default ImageDropzone;
