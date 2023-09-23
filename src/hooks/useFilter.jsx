// * hooks
import useImageContext from '../hooks/useImageContext';

// * data
import { filters_data } from '../data/filters';

const useFilter = () => {
  const { filters, setFilters } = useImageContext();

  const applyFilter = (filter, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filter]: value }));
  };

  const removeFilter = filter => {
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };
      delete updatedFilters[filter];

      return updatedFilters;
    });
  };

  const resetFilters = () => {
    setFilters(prevFilters => {
      return Object.keys(prevFilters).reduce((defaultFilters, filter) => {
        defaultFilters[filter] = filters_data[filter].DEFAULT;
        return defaultFilters;
      }, {});
    });
  };

  return { filters, applyFilter, removeFilter, resetFilters };
};

export default useFilter;
