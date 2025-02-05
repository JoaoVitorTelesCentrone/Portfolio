import { Globe } from "lucide-react";
import React from "react";

const MoreAbout = () => {
  return (
    <div className="mb-4 flex flex-col sm:flex-row xs:flex-col w-full justify-center gap-4 sm:gap-8 sm:px-8 ">
      <div className=" shadow-sm shadow-green-300 rounded-xl flex flex-col xs:max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] xs:mx-4 sm:mx-0 xs:mb-4 sm:mb-0 sm:w-1/2 bg-zinc-800 p-4">
        <Globe className="mx-auto h-12 w-12 my-4 text-green-300" />
        <h1 className="text-white text-3xl xs:text-lg font-bold text-center sm:text-5xl">
          Morando em São Paulo, capital
        </h1>
      </div>
      <div className="rounded-xl xs:mx-4 sm:mx-0 sm:w-1/2 bg-zinc-900 border-2 border-zinc-600 p-4">
        <h1 className="text-white text-base sm:text-2xl md:text-3xl font-medium text-center sm:text-left">
          Como profissional, me especializei não apenas em entregar uma
          qualidade de software, pois acredito que uma boa qualidade de
          software, só se alcança com uma boa qualidade de projeto.
        </h1>
      </div>
    </div>
  );
};

export default MoreAbout;
