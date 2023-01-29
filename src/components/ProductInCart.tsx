import { Minus, Plus, X } from 'phosphor-react';
import clock from '../assets/appleWatch.svg';
import { ButtonClose } from './ButtonClose';

export function ProductInCart() {
  return (
    <div className='flex items-center bg-white rounded-lg p-4 justify-between w-full'>
      <div className='w-0'>
        <div className='relative top-[-50px] right-[-275px]  lg:right-[-305px] '>
          <ButtonClose sizeNumber={20} />
        </div>
      </div>

      <span className='w-16'>
        <img src={clock} alt='relógio' />
      </span>

      <span className='w-28'>Apple Watch Series 4 GPS</span>
      <div className='flex flex-col'>
        <span>Qtd:</span>
        <button className=''>
          <span>
            <Minus />
          </span>
          <span>1</span>
          <span>
            <Plus />
          </span>
        </button>
      </div>

      <span>R$399</span>
    </div>
  );
}
