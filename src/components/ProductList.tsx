import { api } from '../lib/axios';
import { Product } from './Product';

export function ProductList() {
  api
    .get('/products?page=1&rows=10&sortBy=price&orderBy=ASC')
    .then((res) => {
      console.log(res.data.products);
    })
    .catch((error) => console.log('error: ', error));

  return (
    <div className='flex justify-center mx-auto mt-4 mb-7 flex-wrap gap-5  lg:w-[938px] lg:mt-28 lg:mb-32  lg:grid lg:grid-cols-4 lg:gap-7 '>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
