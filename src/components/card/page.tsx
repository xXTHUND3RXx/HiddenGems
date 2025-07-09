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
  const data = api.data.games

  // console.log(data);

  // Adicionar botao para levar o jogo clicado para a pagina da steam

  return (
    <section className="flex flex-col  gap-4 w-full h-140 overflow-x-scroll">
      <span>
        <h1 className="text-center text-5xl">Jogos do catálogo</h1>
      </span>
      <div className="flex ">
        {data.map((game) => (
          <div key={game.id} className="flex flex-col w-68 text-[#EC021A] text-2xl">
            <h1 className="w-[20ch]">{game.name}</h1>
            <div className="w-full "><img src={game.image} alt="imagem do game"></img></div>
          </div>
        ))}
      </div>
    </section>
  );
}
