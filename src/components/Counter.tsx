import { Minus, Plus } from 'phosphor-react';
import { useShoppingCart } from '../context/ShoppingCartContext';

type CounterProps = {
  id: number;
  quantity: number;
};

export function Counter({ id, quantity }: CounterProps) {
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  const width = window.innerWidth;

  return (
    <>
      {width > 1024 && <span className='text-[5px]'>Qtd:</span>}

      <div className='border border-[#bfbfbf] rounded-[4px] lg:text-2xs'>
        <div className='flex gap-2 p-[10px] w-[100px] justify-between lg:gap-3 lg:w-auto lg:px-2 lg:py-1 '>
          <button
            aria-label='Decrement value'
            onClick={() => decreaseCartQuantity(id)}
          >
            <Minus />
          </button>

          <span>{quantity}</span>

          <button
            aria-label='Increment value'
            onClick={() => increaseCartQuantity(id)}
          >
            <Plus />
          </button>
        </div>
      </div>
    </>
  );
}
