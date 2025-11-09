import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#090908] w-full  flex flex-col items-center pb-8">
      <div className="flex items-center justify-betwenn gap-x-285 p-2 h-12">
        <div>
          <Image src="/logo.png" width={156} height={60} alt="safas"></Image>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#games">Games</a>
            </li>

            <li>
              <a href="#generos">Generos</a>
            </li>

            <li>
              <a href="#plataformas">Plataformas</a>
            </li>

            <li>
              <a href="#plataformas">Sobre</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="relative h-[500px] w-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('/HiddenGems_Banner_Exact_Replica.png')] bg-cover bg-center z-0"></div>
        <h1 className="z-10 text-[100px] text-shadow-[0_0_5px_#ff4444]">
          Hidden Gems
        </h1>
        <h2 className="z-11 text-2xl">Descubra sua proxima raridade indie</h2>
        <div className="z-12 flex gap-4 pt-5">
          <button className="bg-[#ff0000] rounded-sm w-43 h-12">Explorar Catálogo</button>
          <button className="bg-[#0a0a0a] border-2 border-[#ff4444] rounded-sm w-43 h-12">Saiba Mais</button>
        </div>
      </div>
    </header>
  );
}
