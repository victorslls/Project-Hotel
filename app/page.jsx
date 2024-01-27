import Footer  from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";


export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto bg-white">
      <Header />
      <Hero />
      <About />
      <Footer />
      <div className="h-[4000px]"></div>
    </main>
  );
}
