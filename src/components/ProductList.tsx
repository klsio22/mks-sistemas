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
    <div>
      <Product />
    </div>
  );
}
