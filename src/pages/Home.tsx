import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductList } from '../components/ProductList';

export function Home() {
  return (
    <div>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}
