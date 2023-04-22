import Link from "next/link";

const Header = () => {
  return (
    <header className='grid gap-7 justify-center text-center p-6 border-b border-gray-100'>
      <Link href='/' className='flex justify-center '>
        <img
          src='https://avatars.githubusercontent.com/u/67608060?v=4'
          alt=''
          className='w-40 border-2 border-cyan-400 rounded-full'
        />
      </Link>
      <div className=''>
        <nav className='flex text-sm font-mediu'>
          <Link
            href='/'
            className='-mb-px border-b-2 border-current p-4 text-cyan-500'
          >
            Inicio
          </Link>
          <Link
            href='/'
            className='-mb-px border-b-2 border-transparent p-4 hover:text-cyan-500'
          >
            Acerca de Mi
          </Link>
          <Link
            href='https://github.com'
            className='-mb-px border-b-2 border-transparent p-4 hover:text-cyan-500'
          >
            Github
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
