import { X } from 'phosphor-react';
import { ProductInCart } from './ProductInCart';

export function MiniCart() {
  return (
    <div className='absolute z-50 h-screen w-[22rem] lg:w-[486px] top-0 right-0 bg-blue-700 flex flex-col justify-between'>
      <header className='flex justify-between px-6 py-5 text-white items-center '>
        <h2 className='w-[166px] font-bold text-2xl'>Carrinho de compras</h2>
        <X
          size={38}
          color='#ffffff'
          className='p-[7px] bg-black rounded-full'
        />
      </header>

      <main className='p-4 h-full overflow-y-auto'>
        <div className='w-full flex flex-col gap-3 p-2'>
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
        </div>
      </main>

      <footer className='text-center text-white font-bold text-3xl '>
        <div className='flex justify-between p-5 '>
          <span>Total</span>
          <span>R$ 789</span>
        </div>
        <div className='p-3 bg-black '>Finalizar</div>
      </footer>
    </div>
  );
}
