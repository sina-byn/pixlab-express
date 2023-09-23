// * hooks
import useImageContext from '../hooks/useImageContext';

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

  return { filters, applyFilter, removeFilter };
};

export default useFilter;
