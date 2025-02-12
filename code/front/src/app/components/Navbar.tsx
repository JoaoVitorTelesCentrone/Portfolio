import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="p-2 m-2 flex bg-zinc-700 rounded-xl justify-between max-w-full xl:px-8 ">
      <h1 className="text-white font-bold text-lg xs:text-base mx-4 py-2">
        João Centrone.
      </h1>
      <ul className="flex space-x-4 mt-2">
        <li className="hover:font-bold text-sm sm:text-base">
          <Link href="#my-page">Sobre</Link>
        </li>
        <li className="hover:font-bold text-sm sm:text-base">
          <Link href="#projetos">Projetos</Link>
        </li>
        <li className="hover:font-bold text-sm sm:text-base">
          <Link href="#contato">Contato</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
