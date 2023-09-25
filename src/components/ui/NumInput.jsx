import { useRef } from 'react';

// * mantine
import { Button, NumberInput } from '@mantine/core';

// * icons
import { IconChevronUp, IconChevronDown } from '@tabler/icons-react';

const NumInput = ({ icon, label, defaultValue, value, onChange, unit, min, max, children }) => {
  const handlersRef = useRef(null);
  const description = `${min}${unit} - ${max}${unit}`;

  const changeHandler = value => onChange(value);
  const resetHandler = () => changeHandler(defaultValue);
  const incrementHandler = () => handlersRef.current?.increment();
  const decrementHandler = () => handlersRef.current?.decrement();

  const controls = (
    <div className='right-controls flex items-center absolute right-0 h-full bg-primary'>
      {children}
      <span className='unit text-sm select-none px-1'>{unit}</span>
      <div className='number-controls flex flex-col h-full'>
        <Button unstyled onClick={incrementHandler} className='h-full hover:bg-zinc-900 px-1'>
          <IconChevronUp width={12} height={12} />
        </Button>
        <Button unstyled onClick={decrementHandler} className='h-full hover:bg-zinc-900 px-1'>
          <IconChevronDown width={12} height={12} />
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <NumberInput
        label={label}
        description={description}
        value={value}
        onChange={changeHandler}
        min={min}
        max={max}
        allowNegative={false}
        handlersRef={handlersRef}
        rightSection={controls}
        leftSection={icon}
        classNames={{ label: 'capitalize', input: 'bg-transparent text-gray-200' }}
      />
      <Button
        size='xs'
        onClick={resetHandler}
        className='block h-fit border-0 py-1 px-0 mr-0 ml-auto mt-0.5'
      >
        reset
      </Button>
    </>
  );
};

export default NumInput;
