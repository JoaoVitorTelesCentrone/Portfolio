import { Globe } from "lucide-react";
import React from "react";

const MySection = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full p-2 xl:h-[550px] "
      id="my-page"
    >
      <div className="flex flex-col items-center md:items-start bg-zinc-900 shadow-sm shadow-green-300 p-4 rounded-xl w-full md:w-[30%] xs:my-2 my-0">
        <h1 className="text-center md:text-left text-lg md:text-2xl font-bold mt-4">
          João Centrone é um QA Analisty em{" "}
          <a href="https://www.topazevolution.com/" className="underline">
            Topaz
          </a>
        </h1>

        <div className="flex flex-col sm:flex-row w-full justify-center gap-4 sm:gap-8 sm:px-8">
          <Globe className="mx-auto h-12 w-12 my-4 text-green-300" />
          <h1 className="text-white text-2xl sm:text-3xl font-bold text-center">
            Morando em São Paulo, capital
          </h1>
        </div>

        <h1 className="text-white text-base sm:text-2xl font-medium text-center sm:text-left xl:text-3xl">
          Como profissional, me especializei não apenas em entregar uma
          qualidade de software, pois acredito que uma boa qualidade de
          software, só se alcança com uma boa qualidade de projeto.
        </h1>
      </div>
    </div>
  );
};

export default MySection;
