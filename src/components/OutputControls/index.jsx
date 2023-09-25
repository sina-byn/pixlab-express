// * mantine
import { Divider } from '@mantine/core';

// * components
import QualityInput from './QualityInput';
import ExtensionSelect from './ExtensionSelect';
import DownloadButton from './DownloadButton';

const OutputControls = () => {
  return (
    <>
      <Divider my='xs' label='Output' labelPosition='left' />
      <ExtensionSelect />
      <QualityInput />
      <DownloadButton />
    </>
  );
};

export default OutputControls;
