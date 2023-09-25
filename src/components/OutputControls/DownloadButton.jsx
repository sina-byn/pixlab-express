// * hooks
import useImageContext from '../../hooks/useImageContext';

// * mantine
import { Button } from '@mantine/core';

// * icons
import { IconDownload } from '@tabler/icons-react';

// * utils
import { drawImage } from '../../utils';

const DownloadButton = () => {
  const { image, filters, imageTransform, outputConfig } = useImageContext();

  const downloadHandler = () => {
    if (!image.dataURL) return;
    const canvas = document.createElement('canvas');
    const { quality, ext } = outputConfig;

    drawImage(canvas, image, { ...imageTransform, filters });
    const dataURL = canvas.toDataURL(`image/${ext}`, quality / 100);
    const link = document.createElement('a');

    link.href = dataURL;
    link.download = `${Date.now()}.${ext}`;
    link.click();
  };

  return (
    <Button
      fullWidth
      mt='1rem'
      onClick={downloadHandler}
      rightSection={<IconDownload width={18} />}
    >
      Download
    </Button>
  );
};

export default DownloadButton;
