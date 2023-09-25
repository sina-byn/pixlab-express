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
    setOutputConfig({ quality: 100, ext, originalExt: ext });
    resetTransform();
    resetFilters();
  };

  const resetImage = () => {
    setOutputConfig(prevConf => {
      const updatedConfig = { ...prevConf };

      updatedConfig.quality = 100;
      updatedConfig.ext = updatedConfig.originalExt;

      return updatedConfig;
    });
    resetTransform();
    resetFilters();
  };

  const deleteImage = () => {
    setImage({ el: null, dataURL: null, width: 0, height: 0 });
    setOutputConfig({ quality: 100, ext: 'png', originalExt: 'png' });
    resetTransform();
    resetFilters();
  };

  return { image, updateImage, resetImage, deleteImage };
};

export default useImage;
