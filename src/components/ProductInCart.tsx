import { X } from 'phosphor-react';
import clock from '../assets/appleWatch.svg';

import { Counter } from './Counter';

export function ProductInCart() {
  const width = window.innerWidth;

  return (
    <div className='flex items-center flex-col gap-7 lg:gap-4 bg-white rounded-lg py-7 px-4 justify-between w-full lg:flex-row'>
      {width < 1024 && (
        <div className='relative left-32 -top-4 h-0'>
          <X size={28} color='#000000' onClick={() => console.log('remover produto')} />
        </div>
      )}
      <span className='w-24'>
        <img src={clock} alt='relógio' />
      </span>

      <span className='lg:w-72 font-normal leading-[17px]'>
        Apple Watch Series 4 GPS
      </span>

      <div className='flex items-center gap-8 w-full justify-center'>
        <div className='flex flex-col gap-1 lg:h-[50px]'>
          <Counter />
        </div>

        <div className='font-bold bg-zinc-700 text-white py-[10px] px-4 lg:px-0 lg:bg-white lg:text-black lg:py-1 rounded-[5px]'>
          <span>R$399</span>
        </div>
      </div>

      {width > 1024 && (
        <div className='w-0'>
          <div className='relative lg:-top-12'>
            <X
              size={20}
              color='#ffffff'
              className='p-1 bg-black rounded-full'
            />
          </div>
        </div>
      )}
    </div>
  );
}
