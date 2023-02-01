import { useEffect, useState } from 'react';
import { useApiProduct } from '../data/useApiProduct';
import { api } from '../lib/axios';
import { Product } from './Product';

export function ProductList() {
  const infoProduct = useApiProduct();


  return (
    <div className='flex justify-center mx-auto mt-7 mb-7 flex-wrap gap-10 lg:w-[938px] lg:mt-28 lg:mb-32 lg:grid lg:grid-cols-4 lg:gap-7 '>
      {infoProduct?.products.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}
