import { Globe, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialMedia from "./SocialMedia";

const MySection = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full p-2 xl:h-[550px] "
      id="my-page"
    >
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start bg-zinc-900 shadow-sm shadow-green-300 p-4 rounded-xl w-full md:w-[30%] xs:my-2 my-0">
        <h1 className="text-center md:text-left text-lg md:text-2xl font-bold mt-4">
          João Centrone é um desenvolvedor de software atualmente trabalhando na
          ZBRA
        </h1>
        <SocialMedia />
      </div>

      <div className="flex flex-col sm:flex-row w-full justify-center gap-4 sm:gap-8 sm:px-8">
        {/* Card 1 */}
        <div className="shadow-sm shadow-green-300 rounded-xl flex flex-col w-full sm:w-1/2 bg-zinc-800 p-4">
          <Globe className="mx-auto h-12 w-12 my-4 text-green-300" />
          <h1 className="text-white text-2xl sm:text-3xl font-bold text-center">
            Morando em São Paulo, capital
          </h1>
          <div className="flex flex-col items-center justify-center bg-zinc-800 rounded-xl p-4">
            <Link
              href=""
              className="flex items-center justify-center bg-black bg-opacity-75 text-white p-3 mt-8 rounded-xl text-lg font-bold hover:bg-green-200 hover:scale-105 transition transform duration-150"
            >
              Entre em contato
              <Send className="w-5 h-5 ml-2 text-green-300" />
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl w-full sm:w-1/2 bg-zinc-900 border-2 border-zinc-600 p-4">
          <h1 className="text-white text-base sm:text-2xl font-medium text-center sm:text-left xl:text-3xl">
            Como profissional, me especializei não apenas em entregar uma
            qualidade de software, pois acredito que uma boa qualidade de
            software, só se alcança com uma boa qualidade de projeto.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MySection;
