// * components
import RotateButton from '../components/RotateButton';
import FlipButton from '../components/FlipButton';

const TransformControls = () => {
  return (
    <div className='transform-controls grid grid-cols-2 gap-2 w-fit mx-auto'>
      <RotateButton dir='left' />
      <RotateButton dir='right' />
      <FlipButton axis='x' />
      <FlipButton axis='y' />
    </div>
  );
};

export default TransformControls;
