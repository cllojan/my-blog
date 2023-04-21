const Footer = () => {
  return (
    <footer className='mt-16 border-t  border-gray-100 pt-8 pb-8'>
      <p className='text-center text-xs/relaxed text-gray-500'>
        © Derechos reservados a Cesar Lojan.
        <br />
        Desarrollado con
        <a
          href=''
          className=' underline transtext-gray-700ition hover:text-gray-700/75'
        >
          Next Js
        </a>
        &
        <a
          href=''
          className='text-gray-700 underline transition hover:text-gray-700/75'
        >
          Tailwind CSS
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
