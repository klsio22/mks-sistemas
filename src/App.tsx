import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Home } from './pages/Home';

import './styles/global.css';
export default function App() {
  return (
    <ShoppingCartProvider>
      <div className=''>
        <Home />
      </div>
    </ShoppingCartProvider>
  );
}
