import { useContext } from 'react';

// * context
import { AppContext } from '../context/AppContextProvider';

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;
