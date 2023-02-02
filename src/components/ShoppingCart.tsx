import { Offcanvas, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { X } from 'phosphor-react';
import { ProductInCart } from './ProductInCart';
import { formatCurrency } from '../utilities/formatCurrency';
import { useApiProduct } from '../data/useApiProduct';
import { Loading } from './Loading';

type ShoppingCartProps = {
  id?: number;
  isOpen: boolean;
};

export function ShoppingCart({ id, isOpen }: ShoppingCartProps) {
  const width = window.innerWidth;
  const { infoProduct, loading } = useApiProduct();
  const { closeCart, cartItems } = useShoppingCart();

  let length;
  if (width < 1024) {
    length = {
      width: '352px',
    };
  } else {
    length = {
      width: '486px',
    };
  }

  const total = cartItems.reduce((total, cartItems) => {
    const item = infoProduct?.products.find((i) => i.id === cartItems.id);
    return total + Number(item?.price) * cartItems.quantity;
  }, 0);

  if (loading) return <Loading />;

  return (
    <Offcanvas
      show={isOpen}
      onHide={closeCart}
      placement='end'
      className='bg-blue-700'
      style={length}
    >
      <Offcanvas.Header
        closeButton
        closeVariant='white'
        className='bg-blue-700 text-white px-7'
      >
        <Offcanvas.Title className='w-[166px] font-bold text-2xl '>
          Carrinho de compras
        </Offcanvas.Title>

        <X
          size={38}
          color='#ffffff'
          className='p-[7px] bg-black rounded-full absolute right-4'
          onClick={closeCart}
        />
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <ProductInCart key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
      <footer className='text-center text-white font-bold text-3xl '>
        <div className='flex justify-between p-5 '>
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <div className='p-3 bg-black '>Finalizar</div>
      </footer>
    </Offcanvas>
  );
}
