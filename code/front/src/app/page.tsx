import Image from "next/image";
import Navbar from "./components/Navbar";
import MySection from "./components/MySection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Code } from "lucide-react";
import foto from "../app/assets/foto.png";

export default function Home() {
  return (
    <main className="flex flex-col bg-zinc-900 min-h-screen w-full">
      {/* Seção Principal */}
      <div className="flex flex-col md:flex-row p-4 gap-4">
        {/* Conteúdo à Esquerda */}
        <div className="w-full md:w-[70%] xl:w-[80%]">
          <Navbar />
          <MySection />
        </div>

        {/* Imagem à Direita */}
        <div className="flex justify-center md:justify-end">
          <Image
            alt="João Centrone"
            className="w-64 h-64 md:w-96 md:h-[600px] rounded-3xl my-2"
            src={foto}
            priority
          />
        </div>
      </div>

      {/* Seção de Projetos */}
      <Projects />

      {/* Rodapé */}
      <Footer />
    </main>
  );
}
