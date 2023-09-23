import { useState } from 'react';

// * mantine
import { Button, Combobox, useCombobox } from '@mantine/core';

// * icons
import { IconPlus } from '@tabler/icons-react';

const Select = ({ title, data, onChange }) => {
  const [search, setSearch] = useState('');
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const options = data
    .filter(item => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map(item => (
      <Combobox.Option value={item} key={item} className='hover:bg-blue-500'>
        {item}
      </Combobox.Option>
    ));

  const toggleHandler = () => combobox.toggleDropdown();

  const optionSubmitHandler = value => {
    onChange(value);
    combobox.closeDropdown();
  };

  return (
    <Combobox
      width='target'
      store={combobox}
      position='bottom-start'
      onOptionSubmit={optionSubmitHandler}
    >
      <Combobox.Target withAriaAttributes={false}>
        <Button
          fullWidth
          variant='outline'
          justify='space-between'
          className='capitalize px-2'
          rightSection={<IconPlus width={15} />}
          onClick={toggleHandler}
        >
          {title}
        </Button>
      </Combobox.Target>

      <Combobox.Dropdown className='bg-primary text-gray-200 border-gray-300/50'>
        <Combobox.Search
          value={search}
          onChange={event => setSearch(event.currentTarget.value)}
          placeholder={`Search ${title}`}
          classNames={{ input: 'bg-transparent text-gray-200' }}
        />
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default Select;
