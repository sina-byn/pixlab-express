import { useContext } from 'react';

// * context
import { ImageContext } from '../context/ImageContextProvider';

const useImageContext = () => {
  return useContext(ImageContext);
};

export default useImageContext;
