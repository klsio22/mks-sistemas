import logoImage from '../assets/logo.svg';
import cart from '../assets/cart.svg';
import { MiniCart } from './MiniCart';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='p-2 bg-blue-700  flex items-center justify-between'>
      <div className='text-xl flex gap-3 text-white i'>
        <img src={logoImage} alt='logo' />
        <span className=''>Sistemas</span>
      </div>
      <div
        className='flex px-3 py-1 gap-3 rounded-xl bg-white'
        onClick={() => setOpen(!open)}
      >
        <img src={cart} alt='' />
        <span>0</span>
      </div>
      {open && <MiniCart />}
    </header>
  );
}
