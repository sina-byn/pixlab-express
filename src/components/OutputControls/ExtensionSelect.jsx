// * hooks
import useOutputConfig from '../../hooks/useOutputConfig';

// * mantine
import { Group, ActionIcon } from '@mantine/core';

// * icons
import { IconJpg, IconPng } from '@tabler/icons-react';

// * data
const extensions_data = [
  ['png', <IconPng />],
  ['jpeg', <IconJpg />],
];

const ExtensionSelect = () => {
  const { outputConfig, updateOutputConfig } = useOutputConfig();

  return (
    <Group gap='xs' justify='center'>
      {extensions_data.map(([ext, icon]) => {
        const clickHandler = () => updateOutputConfig('ext', ext);

        return (
          <ActionIcon
            key={ext}
            size='lg'
            onClick={clickHandler}
            className={ext === outputConfig.ext && 'bg-blue-500'}
          >
            {icon}
          </ActionIcon>
        );
      })}
    </Group>
  );
};

export default ExtensionSelect;
