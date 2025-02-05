import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-zinc-800 rounded-xl py-1 px-10 my-4 mx-2">
      <h1 className="text-white font-bold text-center sm:text-left text-base sm:text-lg">
        João Centrone.
      </h1>
      <h1 className="text-white font-bold text-center sm:text-right text-base sm:text-lg">
        2025.
      </h1>
    </div>
  );
};

export default Footer;
