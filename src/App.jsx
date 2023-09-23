import React from 'react';

// * mantine - hooks
import { useDisclosure } from '@mantine/hooks';

// * providers
import { MantineProvider } from '@mantine/core';
import ImageContextProvider from './context/ImageContextProvider';

// * components
import Header from './components/Header';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';
import MenuIcon from './components/MenuIcon';

// * styles
import '@mantine/core/styles.css';

const App = () => {
  const [isExpanded, { toggle }] = useDisclosure();

  return (
    <MantineProvider>
      <ImageContextProvider>
        <div className='app-shell grid grid-cols-1 md:grid-cols-[1fr,_290px] grid-rows-[auto,_1fr] w-screen h-screen bg-primary overflow-hidden'>
          <Header>{!isExpanded && <MenuIcon isOpen={isExpanded} toggleIsOpen={toggle} />}</Header>
          <Canvas />
          <Sidebar isExpanded={isExpanded}>
            <MenuIcon isOpen={isExpanded} toggleIsOpen={toggle} />
          </Sidebar>
        </div>
      </ImageContextProvider>
    </MantineProvider>
  );
};

export default App;
