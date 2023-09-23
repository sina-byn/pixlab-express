// * hooks
import useFilter from '../hooks/useFilter';

// * mantine
import { ActionIcon } from '@mantine/core';

// * components
import NumInput from '../components/NumInput';

// * icons
import { IconColorFilter, IconTrash } from '@tabler/icons-react';

// * data
import { filters_data } from '../data/filters';

const FilterInput = ({ filter, setAppliedFilters }) => {
  const { DEFAULT, unit, min = 0, max } = filters_data[filter];
  const { filters, applyFilter, removeFilter } = useFilter();

  const changeHandler = value => applyFilter(filter, value);
  const removeFilterHandler = () => {
    setAppliedFilters(prev => prev.filter(f => f !== filter));
    removeFilter(filter);
  };

  return (
    <NumInput
      icon={<IconColorFilter width={18} />}
      label={filter}
      defaultValue={DEFAULT}
      value={filters[filter] || DEFAULT}
      onChange={changeHandler}
      unit={unit}
      min={min}
      max={max}
    >
      <ActionIcon
        size='sm'
        title='remove'
        variant='subtle'
        onClick={removeFilterHandler}
        className='absolute bottom-[120%] right-0'
      >
        <IconTrash width={14} height={14} />
      </ActionIcon>
    </NumInput>
  );
};

export default FilterInput;
