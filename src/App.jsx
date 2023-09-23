import React from 'react';

// * providers
import { MantineProvider } from '@mantine/core';
import ImageContextProvider from './context/ImageContextProvider';

// * styles
import '@mantine/core/styles.css';
import Header from './components/Header';
import ImagePanel from './components/ImagePanel';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <MantineProvider>
      <ImageContextProvider>
        <div className='app-shell grid grid-cols-[1fr,_290px] grid-rows-[auto,_1fr] w-screen h-screen overflow-hidden'>
          <Header />
          <ImagePanel />
          <Sidebar />
        </div>
      </ImageContextProvider>
    </MantineProvider>
  );
};

export default App;
