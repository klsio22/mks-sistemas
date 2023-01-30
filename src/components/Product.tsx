import clock from '../assets/appleWatch.svg';
import shoppingBag from '../assets/shoppingBag.svg';

interface infoProduct {
  photo: string;
  name: string;
  description: string;
  price: string;
}

export function Product({ photo, name, description, price }: infoProduct) {
  return (
    <div className='bg-gray-200 w-[251px] h-72 rounded-lg drop-shadow-2xl flex flex-col gap-3 justify-between lg:w-[217.56px] lg:h-full'>
      <div className='flex flex-col justify-center w-full gap-4 px-2'>
        <div className='flex justify-center pt-5'>
          <img src={photo} alt='image product' className='w-1/2' />
        </div>
        <div className='flex justify-between items-start'>
          <span className='w-1/2 leading-[19px] text-2md'>{name}</span>

          <div className='bg-zinc-700 rounded-[5px] text-white font-bold text-md flex items-center px-12 py-0 w-[35%] justify-center h-6'>
            <span className='m-2'>R${price}</span>
          </div>
        </div>
        <p className='font-light text-3xs leading-3'>{description}</p>
      </div>

      <div className='bg-blue-700 flex items-center gap-4 justify-center text-white rounded-b-lg p-1 font-bold text-lg'>
        <img src={shoppingBag} alt='' />
        <span>comprar</span>
      </div>
    </div>
  );
}
