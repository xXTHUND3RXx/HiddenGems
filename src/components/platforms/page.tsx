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

interface PlatformsResponse {
  platforms: string[];
}

interface GamesByPlatformResponse {
  platforms: Game[];
}

export default function Plataforma() {
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  // Buscar todas as plataformas
  useEffect(() => {
    async function fetchPlatforms() {
      try {
        const res = await axios.get<PlatformsResponse>(
          "https://hiddengems-api.onrender.com/games/platforms"
        );
        setPlatforms(res.data.platforms);
      } catch (error) {
        console.error("Erro ao buscar plataformas:", error);
      }
    }

    fetchPlatforms();
  }, []);

  // Buscar jogos da plataforma selecionada
  useEffect(() => {
    if (!selectedPlatform) {
      setGames([]);
      return;
    }

    setLoading(true);

    async function fetchGamesByPlatform() {
      try {
        const res = await axios.get<GamesByPlatformResponse>(
          `https://hiddengems-api.onrender.com/games/platforms/${encodeURIComponent(
            selectedPlatform!
          )}`
        );
        setGames(res.data.platforms);
      } catch (error) {
        console.error("Erro ao buscar jogos por plataforma:", error);
        setGames([]);
      } finally {
        setLoading(false);
      }
    }

    fetchGamesByPlatform();
  }, [selectedPlatform]);

  return (
    <section id="plataformas" className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Filtrar Jogos por Plataforma
      </h2>

      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={() => setSelectedPlatform(platform)}
            className={`px-4 py-2 rounded-full border ${
              selectedPlatform === platform
                ? "bg-[#EC021A] text-white border-[#EC021A]"
                : "bg-white text-[#EC021A] border-[#EC021A] hover:bg-[#EC021A] hover:text-white transition-colors"
            }`}
          >
            {platform}
          </button>
        ))}
      </div>

      {loading && <p className="text-center">Carregando jogos...</p>}

      {!loading && selectedPlatform && (
        <>
          <h3 className="text-xl font-semibold mb-4 text-center">
            Jogos na plataforma:{" "}
            <span className="text-[#EC021A]">{selectedPlatform}</span>
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
