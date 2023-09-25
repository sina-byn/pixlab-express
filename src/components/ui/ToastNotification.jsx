// * mantine
import { Notification } from '@mantine/core';

const ToastNotification = ({ message }) => {
  return (
    <Notification
      onClose={toggleNotifShown}
      classNames={{
        root: 'fixed right-4 z-[100] bg-primary-dark rounded-sm py-1',
        description: 'text-gray-200',
      }}
    >
      {message}
    </Notification>
  );
};

export default ToastNotification;
