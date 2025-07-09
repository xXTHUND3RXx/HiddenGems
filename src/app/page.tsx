import About from "@/components/about/page";
import Card from "@/components/card/page";
import Header from "@/components/header/page";
import Section1 from "@/components/section1/page";

export default function Home() {
  return <>
    <Header></Header>
    <main>
      <About></About>
      <Section1></Section1>
      <Card></Card>
    </main>
    </>
}
