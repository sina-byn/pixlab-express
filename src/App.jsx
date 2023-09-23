import React from 'react';

// * providers
import { MantineProvider } from '@mantine/core';
import ImageContextProvider from './context/ImageContextProvider';

// * components
import Header from './components/Header';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';

// * styles
import '@mantine/core/styles.css';

const App = () => {
  return (
    <MantineProvider>
      <ImageContextProvider>
        <div className='app-shell grid grid-cols-[1fr,_290px] grid-rows-[auto,_1fr] w-screen h-screen overflow-hidden'>
          <Header />
          <Canvas />
          <Sidebar />
        </div>
      </ImageContextProvider>
    </MantineProvider>
  );
};

export default App;
