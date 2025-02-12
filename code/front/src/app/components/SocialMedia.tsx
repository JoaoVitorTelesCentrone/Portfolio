"use client";
import Link from "next/link";
import React, { useState } from "react";

const SocialMedia = () => {
  const [expandedLink, setExpandedLink] = useState(null);

  // Alterna o link expandido
  const toggleLink = (link: any) => {
    setExpandedLink(expandedLink === link ? null : link);
  };

  const links = [
    { name: "Linkedin", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
  ];

  return (
    <div className="my-4 flex flex-col xs:flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4">
      {links.map((link) => (
        <div
          key={link.name}
          onClick={() => toggleLink(link.name)}
          className={`cursor-pointer rounded-xl bg-zinc-800 text-white font-bold text-center transition-all duration-300 ease-in-out
            ${
              expandedLink === link.name
                ? "p-6 sm:w-48 xs:w-full scale-105"
                : "p-4 sm:w-40 xs:w-full scale-100"
            }`}
        >
          <Link href={link.href} className="block w-full">
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
