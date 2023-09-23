// * hooks
import useImageContext from './useImageContext';

const useImage = () => {
  const { image, setImage } = useImageContext();

  const initImage = () => {
    
  };

  const updateImage = (property, value) => {
    setImage(prevImage => ({ ...prevImage, [property]: value }));
  };

  return { image, setImage, updateImage };
};

export default useImage;
