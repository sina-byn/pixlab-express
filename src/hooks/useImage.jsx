// * hooks
import useFilter from './useFilter';
import useImageContext from './useImageContext';
import useImageTransform from './useImageTransform';
import useOutputConfig from './useOutputConfig';

const useImage = () => {
  const { image, setImage } = useImageContext();
  const { resetFilters } = useFilter();
  const { resetTransform } = useImageTransform();
  const { setOutputConfig } = useOutputConfig();

  const updateImage = (image, dataURL, ext) => {
    const { naturalWidth, naturalHeight } = image;

    setImage({ el: image, dataURL, width: naturalWidth, height: naturalHeight });
    setOutputConfig({ quality: 100, ext });
    resetTransform();
    resetFilters();
  };

  return { image, updateImage };
};

export default useImage;
