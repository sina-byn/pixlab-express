// * hooks
import useOutputConfig from '../../hooks/useOutputConfig';

// * components
import NumInput from '../ui/NumInput';

// * icons
import { IconCamera } from '@tabler/icons-react';

const QualityInput = () => {
  const { outputConfig, updateOutputConfig } = useOutputConfig();

  const changeHandler = value => updateOutputConfig('quality', value);

  if (outputConfig.ext === 'png') {
    return (
      <span className='block text-[0.7rem] text-gray-300/50 mt-2'>
        * only the jpeg format supports the quality settings
      </span>
    );
  }

  return (
    <NumInput
      icon={<IconCamera width={18} />}
      label='quality'
      defaultValue={100}
      value={outputConfig.quality}
      onChange={changeHandler}
      unit='%'
      min={25}
      max={100}
    />
  );
};

export default QualityInput;
