import Link from "next/link";

const Header = () => {
  return (
    <header className='grid gap-7 justify-center text-center p-8'>
      <Link href='/'>
        <h1 className='text-4xl text-slate-950'>Cllojan Blog</h1>
      </Link>
      <div className=''>
        <nav className='flex flex-row items-center justify-center gap-4'>
          <Link href='/'>Inicio</Link>
          <Link href='/'>Acerca de Mi</Link>
          <Link href='https://github.com'>Github</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
