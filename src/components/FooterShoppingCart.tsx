import { useShoppingCart } from '../context/ShoppingCartContext';
import { useApiProduct } from '../data/useApiProduct';
import { formatCurrency } from '../utilities/formatCurrency';
import { Loading } from './Loading';

type itemId = {
  id?: number;
};

export function FooterShoppingCart({ id }: itemId) {
  const { infoProduct, loading } = useApiProduct();
  const { cartItems } = useShoppingCart();

  if (loading) return <Loading />;

  return 
}
