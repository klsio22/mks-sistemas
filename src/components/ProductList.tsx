import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { Product } from './Product';

interface infoProduct {
  products: {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: string;
  }[];
}

export function ProductList() {
  const [infoProduct, setInfoProduct] = useState<infoProduct>();

  useEffect(() => {
    api
      .get('/products?page=1&rows=10&sortBy=price&orderBy=ASC')
      .then((res) => {
        console.log(res.data);
        setInfoProduct(res.data);
      })
      .catch((error) => console.log('error: ', error));
  }, []);

  return (
    <div className='flex justify-center mx-auto mt-4 mb-7 flex-wrap gap-10  lg:w-[938px] lg:mt-28 lg:mb-32  lg:grid lg:grid-cols-4 lg:gap-7 '>
      {infoProduct?.products.map((item) => (
        <Product
          key={item.id}
          photo={item.photo}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}
