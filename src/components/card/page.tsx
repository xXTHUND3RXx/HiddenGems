import React from "react";
import axios from "axios";

interface GamesProps {
  id: number;
  name: string;
  genres: string[];
  image: string;
  developer: string;
  publisher: string;
  plataforms: string[];
  release_date: string;
}

interface ApiResponse {
  games: GamesProps[];
}

export default async function Card() {
  const api = await axios.get<ApiResponse>(
    "https://hiddengems-api.onrender.com/games"
  );
  const data = api.data.games;

  return (
    <section id="games" className="w-full flex flex-col items-center bg-black py-4">
      {/* Título fixo e centralizado na tela */}
      <div className="sticky top-0 z-20 bg-black w-full py-4">
        <h1 className="text-center text-5xl text-white">
          Jogos do catálogo
        </h1>
      </div>

      {/* Scroll horizontal separado */}
      <div className="w-full overflow-x-auto px-6 pb-6">
        <div className="flex gap-6 w-max">
          {data.map((game) => (
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
