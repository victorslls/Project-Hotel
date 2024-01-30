import Footer  from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Recomendation from "@/components/Recomendation";


export default function Home() {
  return (
    <main className="max-w-[1440px] overflow-x-hidden mx-auto bg-white">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Recomendation/>
      <Footer />
      <div className="h-[4000px]"></div>
    </main>
  );
}
