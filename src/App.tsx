import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Home } from './pages/Home';

import './styles/global.css';
export default function App() {
  return (
    <ShoppingCartProvider>
      <Home />
    </ShoppingCartProvider>
  );
}
