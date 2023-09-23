import { useState } from 'react';

// * data
import { filter_names } from '../data/filters';

import Select from './Select';
import { Divider } from '@mantine/core';
import FilterInput from '../features/FilterInput';
import ExtensionSelect from '../features/ExtensionSelect';
import QualityInput from '../features/QualityInput';
import UploadButton from '../features/UploadButton';
import TransformControls from '../features/TransformControls';
import DownloadButton from './DownloadButton';

// * utils
import { sortFilters } from '../utils';

const Sidebar = () => {
  const [appliedFilters, setAppliedFilters] = useState([]);
  const unappliedFilters = filter_names.filter(f => !appliedFilters.includes(f));

  const changeHandler = value => {
    setAppliedFilters(prev => [...prev, value]);
  };

  return (
    <aside className='sidebar w-[290px] h-screen bg-primary text-gray-200 row-start-1 row-span-2 col-start-2 px-4 py-4 overflow-y-auto'>
      <UploadButton />
      <Divider my='xs' label='Transform' labelPosition='left' />
      <TransformControls />
      <Divider my='xs' label='Filters' labelPosition='left' />
      {unappliedFilters.length > 0 && (
        <Select title='filters' data={unappliedFilters} onChange={changeHandler} />
      )}
      <div className='filter-inputs mt-4'>
        {sortFilters(appliedFilters).map(f => (
          <FilterInput key={f} filter={f} setAppliedFilters={setAppliedFilters} />
        ))}
      </div>
      <Divider my='xs' label='Output' labelPosition='left' />
      <ExtensionSelect />
      <QualityInput />
      <DownloadButton />
    </aside>
  );
};

export default Sidebar;
