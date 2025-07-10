import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="bg-[#090908] w-full h-auto flex flex-col items-center pb-8"
    >
      <div className="flex items-center justify-betwenn gap-x-300">
        <div>
          <Image
            src="/ChatGPT Image 7 de jul. de 2025, 22_36_43.png"
            width={100}
            height={100}
            alt="safas"
          ></Image>
        </div>
        <nav>
          <ul style={{ color: "#EC021A" }} className="flex gap-4">
            <li>
              <a href="#games">Games</a>
            </li>

            <li>
              <a href="#generos">Generos</a>
            </li>

            <li>
              <a href="#plataformas">Plataformas</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="relative h-[500px] w-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('/hero-banner-bg.svg')] bg-cover bg-center opacity-40 z-0"></div>
        <h1 className="z-10 text-[100px] font-bold text-white">Hidden Gems</h1>
        <h2 className="z-11 text-2xl">Descubra sua proxima raridade indie</h2>
      </div>
    </header>
  );
}
