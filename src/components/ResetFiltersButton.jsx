// * hooks
import useFilter from '../hooks/useFilter';

// * mantine
import { Button } from '@mantine/core';

// * icons
import { IconTrash } from '@tabler/icons-react';

const ResetFiltersButton = () => {
  const { resetFilters } = useFilter();
  return (
    <Button fullWidth size='xs' leftSection={<IconTrash width={18} />} onClick={resetFilters}>
      Reset Filters
    </Button>
  );
};

export default ResetFiltersButton;
