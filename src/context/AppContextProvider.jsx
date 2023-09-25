import { createContext } from 'react';

// * mantine - hooks
import { useDisclosure } from '@mantine/hooks';

// * context
export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [sidebarExpanded, { toggle: toggleSidebarExpansion }] = useDisclosure();

  const context = { sidebarExpanded, toggleSidebarExpansion };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
