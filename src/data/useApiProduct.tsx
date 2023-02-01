import { useEffect, useState } from 'react';
import { api } from '../lib/axios';

type infoProduct = {
  products: {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: string;
  }[];
};

export function useApiProduct() {
  const [infoProduct, setInfoProduct] = useState<infoProduct>();
  useEffect(() => {
    api
      .get('/products?page=1&rows=10&sortBy=price&orderBy=ASC')
      .then((res) => {
        //console.log(res.data);
        setInfoProduct(res.data);
      })
      .catch((error) => console.log('error: ', error));
  }, []);

  return infoProduct;
}
