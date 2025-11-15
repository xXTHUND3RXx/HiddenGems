import Header from "@/components/header/page";
import Genero from "@/components/Genero/page";
import Plataforma from "@/components/platforms/page";
import CarrosselGames from "@/components/carrosselGames/page";

export default function Home() {
  return <>
    <Header></Header>
    <main className="flex flex-col gap-20">
      {/* <About></About> */}
      <CarrosselGames></CarrosselGames>
      <Genero></Genero>
      <Plataforma></Plataforma>
    </main>
    </>
}
