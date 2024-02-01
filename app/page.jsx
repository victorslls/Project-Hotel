import Footer  from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Recomendation from "@/components/Recomendation";
import Find from "@/components/Find";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="max-w-[1440px] overflow-hidden mx-auto bg-white">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Recomendation/>
      <Find/>
      <Testimonials />
      <Footer />
      {/*<div className="h-[4000px]"></div>*/}
    </main>
  );
}
