import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Domínio 1: (howlongtobeat.com) - CORRIGIDO
      {
        protocol: 'https',
        hostname: 'howlongtobeat.com',
        port: '', // Corrigido (estava com o pathname)
        pathname: '/games/**', // Corrigido (valor movido para cá)
      },
      // Domínio 2: (i.imgur.com)
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**', // Adicionado para permitir qualquer imagem
      },
      // Domínio 3: (i.pinimg.com) - CORRIGIDO
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**', // Corrigido para permitir qualquer imagem
      },
    ],
  }
};

export default nextConfig;