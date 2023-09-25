// * mantine
import { Divider } from '@mantine/core';

// * components
import FlipButton from './FlipButton';
import RotateButton from './RotateButton';

const TransformControls = () => {
  return (
    <>
      <Divider my='xs' label='Transform' labelPosition='left' />
      <div className='transform-controls grid grid-cols-2 gap-2 w-fit mx-auto'>
        <RotateButton dir='left' />
        <RotateButton dir='right' />
        <FlipButton axis='x' />
        <FlipButton axis='y' />
      </div>
    </>
  );
};

export default TransformControls;
