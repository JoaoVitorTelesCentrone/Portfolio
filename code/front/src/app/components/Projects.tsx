// components/Projects.tsx
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Automação de Testes",
      description:
        "Plataforma completa para automação de testes E2E com Cypress",
      image: "/images/automation-project.jpg", // Substitua pelas suas imagens
      technologies: ["Cypress", "JavaScript", "Node.js"],
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/usuario/projeto",
    },
    {
      id: 2,
      title: "Dashboard de Métricas de Qualidade",
      description:
        "Painel visual para acompanhamento de indicadores de qualidade de software",
      image: "/images/dashboard-project.jpg",
      technologies: ["React", "Chart.js", "Next.js"],
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/usuario/projeto",
    },
    {
      id: 3,
      title: "Plataforma de Report de Bugs",
      description:
        "Sistema para reportar, acompanhar e gerenciar bugs em projetos",
      image: "/images/bug-tracker.jpg",
      technologies: ["TypeScript", "Next.js", "MongoDB"],
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/usuario/projeto",
    },
    {
      id: 4,
      title: "Site Institucional",
      description: "Landing page responsiva para empresa de tecnologia",
      image: "/images/website-project.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://exemplo.com",
      githubUrl: "https://github.com/usuario/projeto",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Meus Projetos em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-800 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
            >
              {/* Imagem do projeto */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-zinc-900 p-3 rounded-full hover:bg-green-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-zinc-900 p-3 rounded-full hover:bg-green-300 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Conteúdo do projeto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tecnologias utilizadas */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-zinc-700 text-green-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Quer ver mais projetos ou discutir uma colaboração?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
          >
            Entre em Contato
            <ExternalLink className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
