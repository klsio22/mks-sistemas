import clock from '../assets/appleWatch.svg';
import shoppingBag from '../assets/shoppingBag.svg';
export function Product() {
  return (
    <div className='bg-gray-200 w-[251px] h-72 rounded-lg drop-shadow-2xl flex flex-col gap-3 justify-between lg:w-[217.56px]'>
      <div className='flex flex-col justify-center w-full gap-3 px-2'>
        <div className='flex justify-center pt-5'>
          <img src={clock} alt='' />
        </div>
        <div className='flex justify-between'>
          <span className='w-[124px] leading-[19px] text-2md'>
            Apple Watch Series 4 GPS
          </span>

          <div className='bg-zinc-700 rounded-[5px] text-white font-bold flex items-center px-2'>
            <span>R$399</span>
          </div>
        </div>
        <p className='font-light text-3xs leading-3'>
          Redesigned from scratch and completely revised.
        </p>
      </div>

      <div className='bg-blue-700 flex items-center gap-4 justify-center text-white rounded-b-lg p-1 font-bold text-lg'>
        <img src={shoppingBag} alt='' />
        <span>comprar</span>
      </div>
    </div>
  );
}
