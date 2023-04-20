import Link from "next/link";

const Header = () => {
  return (
    <header className='text-center bg-slate-800 p-8'>
      <Link href='/'>
        <h1 className='text-3xl text-white'>Blog</h1>
      </Link>
      <p className='text-slate-300'>Hola :v</p>
    </header>
  );
};

export default Header;
