import { useApiProduct } from '../data/useApiProduct';
import { Loading } from './Loading';
import { Product } from './Product';
import { Error } from '../components/Error';

export function ProductList() {
  const { infoProduct, loading, error } = useApiProduct();

  if (loading) return <Loading />;
  if (error) return <Error />;

  console.log(infoProduct?.products);

  return (
    <div className='flex justify-center mx-auto mt-7 mb-7 flex-wrap gap-10 lg:w-[938px] lg:mt-28 lg:mb-32 lg:grid lg:grid-cols-4 lg:gap-7 '>
      {infoProduct?.products.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}
