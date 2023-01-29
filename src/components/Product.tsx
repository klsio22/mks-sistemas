import clock from '../assets/apple-watch.svg';
import shoppingBag from '../assets/shoppingBag.svg';
export function Product() {
  return (
    <div>
      <div>
        <img src={clock} alt='' />

        <div>
          <span>Apple Watch Series 4 GPS</span>
          <span>R$399</span>
        </div>

      </div>
      <div className=''>
        <img src={shoppingBag} alt='' />
        <span>comprar</span>
      </div>
    </div>
  );
}
