import logoImage from '../assets/logo.svg';
import cart from '../assets/cart.svg';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Header() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <header className='bg-blue-700  '>
      <div className='p-4 m-auto flex items-center justify-between max-w-[1440px] lg:py-5 lg:px-2'>
        <div className='text-xl flex gap-3 text-white i'>
          <img src={logoImage} alt='logo' />
          <span className=''>Sistemas</span>
        </div>
        <div
          className='flex px-3 py-1 gap-3 rounded-xl bg-white'
          onClick={openCart}
        >
          <img src={cart} alt='' />
          <span>{cartQuantity}</span>
        </div>
      </div>
    </header>
  );
}
