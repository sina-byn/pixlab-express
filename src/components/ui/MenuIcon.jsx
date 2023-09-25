import clsx from 'clsx';

// * mantine
import { Burger } from '@mantine/core';

const MenuIcon = ({ isOpen, toggleIsOpen, className }) => {
  return (
    <Burger
      color='white'
      opened={isOpen}
      onClick={toggleIsOpen}
      aria-label='toggle sidebar'
      className={clsx('md:hidden', className)}
    />
  );
};

export default MenuIcon;
