import { useState } from 'react';

// * mantine
import { Divider } from '@mantine/core';

// * components
import Select from '../ui/Select';
import FilterInput from './FilterInput';
import ResetFiltersButton from './ResetFiltersButton';

// * utils
import { sortFilters } from '../../utils';

// * data
import { filter_names } from '../../data/filters';

const FilterControls = () => {
  const [appliedFilters, setAppliedFilters] = useState([]);
  const unappliedFilters = filter_names.filter(f => !appliedFilters.includes(f));

  const changeHandler = value => {
    setAppliedFilters(prev => [...prev, value]);
  };

  return (
    <>
      <Divider my='xs' label='Filters' labelPosition='left' />
      {unappliedFilters.length > 0 && (
        <Select title='filters' data={unappliedFilters} onChange={changeHandler} />
      )}
      <div className='filter-inputs my-4'>
        {sortFilters(appliedFilters).map(f => (
          <FilterInput key={f} filter={f} setAppliedFilters={setAppliedFilters} />
        ))}
      </div>
      <ResetFiltersButton />
    </>
  );
};

export default FilterControls;
