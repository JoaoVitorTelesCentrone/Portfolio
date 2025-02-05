import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import foto from "../assets/foto.png";

const MySection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full p-4 gap-4" id="my-page">
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start bg-zinc-900 shadow-sm shadow-green-300 p-4 rounded-xl w-full md:w-1/2">
        <Image alt="" className="w-48 h-48 rounded-3xl my-2" src={foto} />
        <h1 className="text-center md:text-left text-lg md:text-2xl font-bold mt-4">
          João Centrone é um desenvolvedor de software atualmente trabalhando na
          ZBRA
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center bg-zinc-800 rounded-xl p-4 w-full md:w-1/2">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold mt-4">
          Tem algum projeto em mente?
        </h1>
        <Link
          href=""
          className="flex items-center justify-center bg-black bg-opacity-75 text-white p-3 mt-8 rounded-xl text-lg font-bold hover:bg-green-200 hover:scale-105 transition transform duration-150"
        >
          Entre em contato
          <Send className="w-5 h-5 ml-2 text-green-300" />
        </Link>
      </div>
    </div>
  );
};

export default MySection;
