// * providers
import AppContextProvider from './context/AppContextProvider';
import ImageContextProvider from './context/ImageContextProvider';

// * mantine - provider
import { MantineProvider } from '@mantine/core';

// * mantine
import { Notifications } from '@mantine/notifications';

// * components
import Header from './components/Header';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';

// * styles
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const App = () => {
  return (
    <MantineProvider>
      <AppContextProvider>
        <ImageContextProvider>
          <Notifications
            autoClose={1500}
            position='top-right'
            className='w-fit h-fit -mt-1'
          />
          <div className='app-shell grid grid-cols-1 md:grid-cols-[1fr,_290px] grid-rows-[auto,_1fr] w-screen h-screen bg-primary overflow-hidden'>
            <Header />
            <Canvas />
            <Sidebar />
          </div>
        </ImageContextProvider>
      </AppContextProvider>
    </MantineProvider>
  );
};

export default App;
