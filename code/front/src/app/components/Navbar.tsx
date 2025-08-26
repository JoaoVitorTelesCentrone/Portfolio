import Link from "next/link";
import React from "react";

// Componente Navbar compacto
const Navbar = () => {
  return (
    <div className="col-span-4 bg-zinc-800 rounded-xl p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">João Centrone</h1>
        <nav className="flex space-x-4">
          <a
            href="#sobre"
            className="hover:text-green-300 transition-colors text-sm"
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className="hover:text-green-300 transition-colors text-sm"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="hover:text-green-300 transition-colors text-sm"
          >
            Contato
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
