import clock from '../assets/appleWatch.svg';
import shoppingBag from '../assets/shoppingBag.svg';
export function Product() {
  return (
    <div className='bg-gray-200 w-[217.56px] h-72 rounded-lg drop-shadow-2xl flex flex-col gap-3 justify-between'>
      <div className='flex flex-col justify-center w-full gap-3 px-2'>
        <div className='flex justify-center pt-5'>
          <img src={clock} alt='' />
        </div>
        <div className='flex'>
          <span className='w-[124px] leading-[19px] text-2md'>
            Apple Watch Series 4 GPS
          </span>
          <span className='bg-zinc-700 p-1 m-auto rounded-[5px] text-white font-bold'>R$399</span>
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
