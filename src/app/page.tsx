import About from "@/components/about/page";
import Card from "@/components/card/page";
import Header from "@/components/header/page";
import Genero from "@/components/Genero/page";
import Plataforma from "@/components/platforms/page";

export default function Home() {
  return <>
    <Header></Header>
    <main className="flex flex-col gap-20">
      <About></About>
      <Card></Card>
      <Genero></Genero>
      <Plataforma></Plataforma>
    </main>
    </>
}
