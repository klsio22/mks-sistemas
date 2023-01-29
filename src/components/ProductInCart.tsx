import clock from '../assets/appleWatch.svg';
import { ButtonClose } from './ButtonClose';
import { Counter } from './Counter';

export function ProductInCart() {
  return (
    <div className='flex items-center bg-white rounded-lg py-7 px-4 justify-between w-full'>
      <span className='w-10'>
        <img src={clock} alt='relógio' />
      </span>

      <span className='w-28 font-normal leading-[17px]'>
        Apple Watch Series 4 GPS
      </span>

      <div className='flex flex-col gap-1 h-[50px]'>
        <Counter />
      </div>

      <span className='font-bold'>R$399</span>

      <div className='w-0'>
        <div className='relative -top-12'>
          <ButtonClose sizeNumber={20} />
        </div>
      </div>
    </div>
  );
}
