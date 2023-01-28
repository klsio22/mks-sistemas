import logoImage from '../assets/logo.svg';

export function Header() {
  return (
    <header className='bg-blue-700 px-3'>
      <div className=''>
        <img src={logoImage} alt='logo' />
        <span>Sistemas</span>
      </div>
      <div className='bgz'>
        <div></div>
      </div>
    </header>
  );
}
