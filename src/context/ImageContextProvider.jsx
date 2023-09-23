import { useState, createContext } from 'react';

// * context
export const ImageContext = createContext(null);

const ImageContextProvider = ({ children }) => {
  const [image, setImage] = useState({
    el: null,
    dataURL: null,
    width: 0,
    height: 0,
  });
  const [filters, setFilters] = useState({});
  const [outputConfig, setOutputConfig] = useState({
    quality: 100,
    ext: 'png',
  });
  const [imageTransform, setImageTransform] = useState({
    rotate: 0,
    scale: { x: 1, y: 1 },
  });

  const context = {
    image,
    setImage,
    filters,
    setFilters,
    outputConfig,
    setOutputConfig,
    imageTransform,
    setImageTransform,
  };

  return <ImageContext.Provider value={context}>{children}</ImageContext.Provider>;
};

export default ImageContextProvider;
