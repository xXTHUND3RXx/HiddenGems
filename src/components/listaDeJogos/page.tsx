'use client';

import React from "react";
import { useFetch } from "@/hooks/useFetch";

export default function ListaDeJogos({apiUrl}: { apiUrl: string}) {
  const { data: games, loading, error} = useFetch(apiUrl)

  if(loading) {
    return <p>Carregando cards...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados.</p>
  }

  return (
    <section id="games" className="w-full flex flex-col items-center bg-black py-4">
      {/* Scroll horizontal separado */}
      <div className="w-full overflow-x-auto px-6 pb-6">
        <div className="flex gap-6 w-max">
          {games && games.map((game) => (
            <div
              key={game.id}
              className="flex-shrink-0 flex flex-col w-52 min-w-52 text-[#EC021A]"
            >
              <div className="text-center text-base font-semibold break-words mb-2">
                {game.name}
              </div>
              <img
                src={game.image}
                alt={`Imagem do jogo ${game.name}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
