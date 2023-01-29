import logoImage from '../assets/logo.svg';
import cart from '../assets/cart.svg';

export function Header() {
  return (
    <header className='p-2 bg-blue-700  flex items-center justify-between'>
      <div className='text-xl flex gap-3 text-white'>
        <img src={logoImage} alt='logo' />
        <span className=''>Sistemas</span>
      </div>
      <div className='flex px-3 py-1 gap-3 rounded-xl bg-white'>
        <img src={cart} alt='' />
        <span>0</span>
      </div>
    </header>
  );
}
