import clsx from 'clsx';

// * mantine
import { Burger } from '@mantine/core';

const MenuIcon = ({ isOpen, toggleIsOpen }) => {
  return (
    <Burger
      color='white'
      opened={isOpen}
      onClick={toggleIsOpen}
      aria-label='toggle sidebar'
      className={clsx('md:hidden', isOpen && 'mb-3 -ml-2')}
    />
  );
};

export default MenuIcon;
