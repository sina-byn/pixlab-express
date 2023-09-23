import { useState } from 'react';

// * mantine
import { Divider } from '@mantine/core';

// * components
import Select from './Select';
import FilterInput from './FilterInput';
import ExtensionSelect from './ExtensionSelect';
import QualityInput from './QualityInput';
import UploadButton from './UploadButton';
import DownloadButton from './DownloadButton';
import RotateButton from './RotateButton';
import FlipButton from './FlipButton';

// * data
import { filter_names } from '../data/filters';

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
      <div className='transform-controls grid grid-cols-2 gap-2 w-fit mx-auto'>
        <RotateButton dir='left' />
        <RotateButton dir='right' />
        <FlipButton axis='x' />
        <FlipButton axis='y' />
      </div>
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
