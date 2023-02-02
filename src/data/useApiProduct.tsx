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
  const [loading, setLoading] = useState(true);
  const [infoProduct, setInfoProduct] = useState<infoProduct>();

  async function productsApi() {
    api
      .get('/products?page=1&rows=10&sortBy=price&orderBy=ASC')
      .then((res) => {
        setLoading(true);
        //console.log(res.data);
        setInfoProduct(res.data);
      })
      .catch((error) => console.log('error: ', setLoading(true)))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    productsApi();
  }, []);

  return { infoProduct, loading };
}
