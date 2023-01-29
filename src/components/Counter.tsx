import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(1);

  function decrement(value: number) {
    value > 1 ? setCount(value - 1) : setCount(1);
  }

  return (
    <>
      <span className='text-[5px]'>Qtd:</span>
      <div className='border border-[#bfbfbf] rounded-[4px] text-2xs'>
        <div className='flex gap-2 px-2 py-1'>
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
