import { createContext, ReactNode, useContext, useState } from 'react';
import { MiniCart } from '../components/MiniCart';
import { ShoppingCart } from '../components/ShoppingCart';

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const openCart = () => setIsOpenCart(true);
  const closeCart = () => setIsOpenCart(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currencyItems) => {
      if (currencyItems.find((item) => item.id === id) == null)
        return [...currencyItems, { id, quantity: 1 }];
      else {
        return currencyItems.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity + 1 };
          else return item;
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currencyItems) => {
      if (currencyItems.find((item) => item.id === id)?.quantity === 1)
        return currencyItems.filter((item) => item.id !== id);
      else {
        return currencyItems.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity - 1 };
          else return item;
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currencyItems) => {
      return currencyItems.filter((item) => item.id != id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
       <ShoppingCart isOpen={isOpenCart}  />
    </ShoppingCartContext.Provider>
  );
}
