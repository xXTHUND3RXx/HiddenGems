"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Game {
  id: number;
  name: string;
  image: string;
  genres: string[];
  developer: string;
  publisher: string;
  platforms: string[];
  release_date: string;
}

interface GenresResponse {
  genres: string[];
}

interface GamesByGenreResponse {
  Genres: Game[];
}

export default function Genero() {
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  // Buscar todos os gêneros
  useEffect(() => {
    async function fetchGenres() {
      try {
        const res = await axios.get<GenresResponse>(
          "https://hiddengems-api.onrender.com/games/genres"
        );
        setGenres(res.data.genres);
      } catch (error) {
        console.error("Erro ao buscar gêneros:", error);
      }
    }

    fetchGenres();
  }, []);

  // Buscar jogos do gênero selecionado
  useEffect(() => {
    if (!selectedGenre) {
      setGames([]);
      return;
    }

    setLoading(true);

    async function fetchGamesByGenre() {
      try {
        const res = await axios.get<GamesByGenreResponse>(
          `https://hiddengems-api.onrender.com/games/genres/${encodeURIComponent(
            selectedGenre!
          )}`
        );
        setGames(res.data.Genres); // <-- Corrigido para acessar o array correto
      } catch (error) {
        console.error("Erro ao buscar jogos por gênero:", error);
        setGames([]);
      } finally {
        setLoading(false);
      }
    }

    fetchGamesByGenre();
  }, [selectedGenre]);

  return (
    <section id="generos" className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Escolha o gênero
      </h2>

      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-2 rounded-full border ${
              selectedGenre === genre
                ? "bg-[#EC021A] text-white border-[#EC021A]"
                : "bg-white text-[#EC021A] border-[#EC021A] hover:bg-[#EC021A] hover:text-white transition-colors"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {loading && <p className="text-center">Carregando jogos...</p>}

      {!loading && selectedGenre && (
        <>
          <h3 className="text-xl font-semibold mb-4 text-center">
            Jogos no gênero:{" "}
            <span className="text-[#EC021A]">{selectedGenre}</span>
          </h3>

          {games.length === 0 ? (
            <p className="text-center">Nenhum jogo encontrado.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="border rounded-lg p-4 flex flex-col items-center"
                >
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-48 h-auto rounded-md mb-3"
                  />
                  <h4 className="text-lg font-bold text-center">{game.name}</h4>
                  <p className="text-sm text-gray-600">
                    Desenvolvedor: {game.developer}
                  </p>
                  <p className="text-sm text-gray-600">
                    Lançamento: {game.release_date}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
