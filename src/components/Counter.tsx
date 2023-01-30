import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(1);

  function decrement(value: number) {
    value > 1 ? setCount(value - 1) : setCount(1);
  }

  const width = window.innerWidth;

  return (
    <>
      {width > 1024 && <span className='text-[5px]'>Qtd:</span>}

      <div className='border border-[#bfbfbf] rounded-[4px] lg:text-2xs'>
        <div className='flex gap-2 p-[10px] w-[100px] justify-between lg:gap-3 lg:w-auto lg:px-2 lg:py-1 '>
          <button aria-label='Decrement value' onClick={() => decrement(count)}>
            <Minus />
          </button>

          <span>{count}</span>

          <button
            aria-label='Increment value'
            onClick={() => setCount(count + 1)}
          >
            <Plus />
          </button>
        </div>
      </div>
    </>
  );
}
