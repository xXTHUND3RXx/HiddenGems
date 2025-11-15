"use client";

import { useFetch } from "@/hooks/useFetch";
import { Game } from "@/types/game";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

export default function CarrosselGames() {
  const {
    data: games,
    loading,
    error,
  } = useFetch("https://hiddengems-api.onrender.com/games");

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  if (loading) {
    return <p>Carregando jogos...</p>;
  }
  if (error) {
    return <p>Erro ao carregar os jogos.</p>;
  }

  return (
    <div className="relative w-full px-12">
      <h1 className="mb-5 titulo-com-sublinhado-personalizado">Jogos do Catálogo</h1>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]} // Ativa o módulo de navegação (botões)
        navigation={{
          nextEl: ".meu-botao-next", // Classe do seu botão "próximo"
          prevEl: ".meu-botao-prev", // Classe do seu botão "anterior"
        }} // Diz ao Swiper para CRIAR os botões
        pagination={{ clickable: true }}
        spaceBetween={24} // O mesmo que seu 'gap-6'
        slidesPerView={7} // Quantos slides mostrar (ajuste como quiser)
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
      >
        {games.map((game: Game) => (
          <SwiperSlide key={game.id}>
            <div className="flex flex-col w-full text-[#EC021A]">
              <div className="text-center text-base font-semibold break-words mb-2">
                {game.name}
              </div>
              <img
                src={game.image}
                alt={`Imagem do jogo ${game.name}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevButtonRef}
        className="meu-botao-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 
                       p-2 rounded-full bg-white/10 hover:bg-red-500 text-red-500 hover:text-white transition-all"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        ref={nextButtonRef}
        className="meu-botao-next absolute right-2 top-1/2 -translate-y-1/2 z-10
                       p-2 rounded-full bg-white/10 hover:bg-red-500 text-red-500 hover:text-white transition-all"
      >
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
