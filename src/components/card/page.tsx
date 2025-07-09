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

  console.log(data);

  return (
    <div>
      {data.map((game) => (
        <div key={game.id}>
          <h1>{game.name}</h1>
          <img src={game.image} width={100} height={100} alt="imagem do game"></img>
        </div>
      ))}
    </div>
  );
}
