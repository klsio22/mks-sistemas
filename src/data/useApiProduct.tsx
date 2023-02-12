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
  const [infoProduct, setInfoProduct] = useState<infoProduct>({
    products: [{ id: 0, photo: '', name: '', description: '', price: '' }],
  });
  const [error, setError] = useState(false);

  async function productsApi(): Promise<any> {
    api
      .get('/products?page=1&rows=10&sortBy=price&orderBy=ASC')
      .then((res) => {
        //console.log(res.data);
        setInfoProduct(res.data);
      })
      .catch((error) => {
        console.log('erro', error);
        setError(true);
        setLoading(true);
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    productsApi();
  }, []);

  return { infoProduct, loading, error };
}
