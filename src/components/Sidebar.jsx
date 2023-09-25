import clsx from 'clsx';

// * hooks
import useAppContext from '../hooks/useAppContext';

// * components
import MenuIcon from './ui/MenuIcon';
import UploadButton from './UploadButton';
import TransformControls from './TransformControls';
import ImageControls from './ImageControls';
import FilterControls from './FilterControls';
import OutputControls from './OutputControls';

const Sidebar = () => {
  const { sidebarExpanded, toggleSidebarExpansion } = useAppContext();

  return (
    <aside
      className={clsx(
        'sidebar fixed md:static top-0 right-0 z-40 w-[200px] md:w-[290px] h-screen',
        'bg-primary text-gray-200 row-start-1 row-span-2 col-start-2 px-4 py-3 overflow-y-auto',
        'md:translate-x-0 transition-all md:transition-none duration-300',
        sidebarExpanded ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <MenuIcon
        isOpen={sidebarExpanded}
        toggleIsOpen={toggleSidebarExpansion}
        className='mb-3 -ml-2'
      />
      <UploadButton />
      <TransformControls />
      <ImageControls />
      <FilterControls />
      <OutputControls />
    </aside>
  );
};

export default Sidebar;
