import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className='p-4 my-2 w-full flex justify-between bg-secondary rounded-3xl sm:py-1'>
      <h1 className='text-white text-lg sm:text-sm font-bold mb-2 sm:mt-2 sm:ml-4 mx-10 mt-2'>joão centrone.</h1>
      <ul className='flex sm:flex-row sm:mr-6 ml-4 sm:mt-2 mt-2 mx-10'>
        <li className='mx-4 hover:font-bold sm:text-sm sm:ml-2'>
          <Link href='#my-page'>
            sobre
          </Link>
        </li>
        <li className='mx-4 hover:font-bold sm:text-sm sm:mx-2'>
          <Link href='#projetos'>
            projetos
          </Link>
        </li>
        <li className='mx-4 hover:font-bold sm:text-sm sm:mx-2' >
          <Link href='#contato'>
            contato
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
