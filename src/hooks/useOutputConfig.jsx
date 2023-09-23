// * hooks
import useImageContext from './useImageContext';

const useOutputConfig = () => {
  const { outputConfig, setOutputConfig } = useImageContext();

  const updateOutputConfig = (field, value) => {
    setOutputConfig(prevConf => ({ ...prevConf, [field]: value }));
  };

  return { outputConfig, updateOutputConfig };
};

export default useOutputConfig;
