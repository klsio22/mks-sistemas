import logoImage from '../assets/logo.svg';
import cart from '../assets/cart.svg';
import { MiniCart } from './MiniCart';
import { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Header() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <header className='bg-blue-700  '>
      <div className='p-3 lg:py-5 lg:px-11 m-auto flex items-center justify-between max-w-[1440px]'>
        <div className='text-xl flex gap-3 text-white i'>
          <img src={logoImage} alt='logo' />
          <span className=''>Sistemas</span>
        </div>
        <div
          className='flex px-3 py-1 gap-3 rounded-xl bg-white'
          onClick={openCart}
        >
          <img src={cart} alt='' />
          <span>0</span>
        </div>

      </div>
    </header>
  );
}
