// * hooks
import useImageContext from './useImageContext';

const useImageTransform = () => {
  const { imageTransform, setImageTransform } = useImageContext();

  const rotateImage = dir => {
    setImageTransform(prevTransform => {
      const updatedTransform = { ...prevTransform };
      const degreeChange = dir === 'right' ? -90 : 90;
      const updatedRotate = updatedTransform.rotate + degreeChange;

      console.log(updatedRotate);

      updatedTransform.rotate = updatedRotate;

      return updatedTransform;
    });
  };

  const flipImage = axis => {
    const prevScale = imageTransform.scale;
    const updatedScale = { ...prevScale, [axis]: prevScale[axis] * -1 };

    setImageTransform(prevTransform => ({ ...prevTransform, scale: updatedScale }));
  };

  return { imageTransform, rotateImage, flipImage };
};

export default useImageTransform;
