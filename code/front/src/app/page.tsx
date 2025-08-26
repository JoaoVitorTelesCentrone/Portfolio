import Image from "next/image";
import Navbar from "./components/Navbar";
import {
  Globe,
  Send,
  Code,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { GiCharacter } from "react-icons/gi";

// Componente SocialMedia
const SocialMedia = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Github size={24} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Twitter size={24} />
      </a>
      <a
        href="mailto:seuemail@exemplo.com"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

// Componente Projects
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Projeto de Automação",
      description: "Sistema de automação de testes para aplicações web",
      tags: ["Cypress", "JavaScript", "QA"],
    },
    {
      id: 2,
      title: "Dashboard de Métricas",
      description: "Painel para acompanhamento de métricas de qualidade",
      tags: ["React", "Chart.js", "API"],
    },
    {
      id: 3,
      title: "Sistema de Report de Bugs",
      description: "Plataforma para reportar e acompanhar bugs",
      tags: ["TypeScript", "Next.js", "MongoDB"],
    },
  ];

  return (
    <div
      className="p-4 mx-4 md:mx-8 rounded-xl bg-zinc-800 shadow-sm shadow-green-300"
      id="projetos"
    >
      <h1 className="flex text-2xl md:text-3xl p-2 font-bold uppercase text-white">
        Meus Projetos <Code className="mt-1 mx-2 text-green-300" />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-700 p-4 rounded-lg text-white shadow-md hover:bg-zinc-600 transition-colors"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-800 text-xs text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="p-4 text-center text-gray-400" id="contato">
      <p>
        © {new Date().getFullYear()} João Centrone. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

// Página principal
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white p-4">
      {/* Grid principal estilo Bento */}
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 auto-rows-[minmax(50px)]">
        <Navbar />

        {/* Célula 2 - Apresentação (2x2) */}
        <div className="col-span-2 row-span-2 bg-zinc-800 rounded-xl  p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            QA Analyst na{" "}
            <a
              href="https://www.topazevolution.com/"
              className="text-green-300"
            >
              Topaz
            </a>
          </h2>
          <p className="text-gray-300 mb-6">
            Especializado em garantir a qualidade de software através de testes
            e processos bem definidos.
          </p>
          <SocialMedia />
        </div>

        <div className="col-span-1 row-span-1 bg-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center">
          <Globe className="text-green-300 mb-2" size={32} />
          <p className="text-center">São Paulo, Brasil</p>
        </div>

        <div className="col-span-1 row-span-1 bg-zinc-800 rounded-xl p-4">
          <h3 className="text-white font-bold mb-3 text-center flex items-center justify-center">
            <Code className="mr-2" size={18} />
            Tecnologias
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-zinc-700 text-green-300 p-2 rounded text-sm text-center border border-green-500/30">
              Cypress
            </div>
            <div className="bg-zinc-700 text-green-300 p-2 rounded text-sm text-center border border-green-500/30">
              Postman
            </div>
            <div className="bg-zinc-700 text-green-300 p-2 rounded text-sm text-center border border-green-500/30">
              Selenium
            </div>
            <div className="bg-zinc-700 text-green-300 p-2 rounded text-sm text-center border border-green-500/30">
              Next js
            </div>
            <div className="bg-zinc-700 text-green-300 p-2 rounded text-sm text-center border border-green-500/30">
              React
            </div>
            <div className="bg-zinc-700 text-green-300 p-2 rounded text-sm text-center border border-green-500/30">
              JS / TS
            </div>
          </div>
        </div>

        {/* Célula 5 - Filosofia (2x1) */}
        <div className="col-span-2 row-span-1 bg-zinc-800 rounded-xl p-4 flex items-center">
          <p className="text-lg">
            Acredito que uma boa qualidade de software só se alcança com uma boa
            qualidade de projeto e processos bem estabelecidos.
          </p>
        </div>

        {/* Célula 6 - Projetos (4x2) */}
        <div className="col-span-4 row-span-2 bg-zinc-800 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <GiCharacter className="text-green-300 mr-2" size={28} />
            <h2 className="text-2xl font-bold">Carreira</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Zbra soluções</h3>
              <p className="text-gray-300 text-sm">
                O começo na área de QA, onde aprendi os fundamentos de testes.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-green-800 text-xs text-white px-2 py-1 rounded-full">
                  Cypress
                </span>
                <span className="bg-green-800 text-xs text-white px-2 py-1 rounded-full">
                  JavaScript
                </span>
              </div>
            </div>

            <div className="bg-zinc-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Topaz evolution</h3>
              <p className="text-gray-300 text-sm">
                Consolidação como Analista de QA, focando em automação.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-green-800 text-xs text-white px-2 py-1 rounded-full">
                  React
                </span>
                <span className="bg-green-800 text-xs text-white px-2 py-1 rounded-full">
                  Chart.js
                </span>
              </div>
            </div>

            <div className="bg-zinc-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">QA LAB</h3>
              <p className="text-gray-300 text-sm">
                Meu lugar de compartilhar, ensinar e aprender sobre QA.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-green-800 text-xs text-white px-2 py-1 rounded-full">
                  Next.js
                </span>
                <span className="bg-green-800 text-xs text-white px-2 py-1 rounded-full">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Célula 7 - Contato (4x1) */}
        <div className="col-span-4 bg-zinc-800 rounded-xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">
              Vamos trabalhar juntos?
            </h2>
            <Link
              href="#contato"
              className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              Entre em contato
              <Send className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Célula 8 - Footer (4x1) */}
        <div className="col-span-4 bg-zinc-800 rounded-xl p-4 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} João Centrone. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </main>
  );
}
