import { getByText, render, waitFor } from '@testing-library/react';
import { Product } from '../components/Product';
import { ProductList } from '../components/ProductList';
import { useApiProduct } from '../data/useApiProduct';

import { api } from '../lib/axios';

test('get api ', async () => {
  const response = await api.get(
    '/products?page=1&rows=10&sortBy=price&orderBy=ASC'
  );
  const products = response.data?.products

  expect(response.status).toBe(200);

  console.log(products);
  expect(Array.isArray(products)).toBe(true);

  
});

/* test('renders data from API', async () => {
  //const { getByText } = render(<MyComponent />);

  const linkElement = await waitFor(() => getByText(/Hello, John Doe!/i));
  expect(linkElement).toBeInTheDocument();

  const apiData = await linkElement.getData();
  console.log(apiData);
}); */
