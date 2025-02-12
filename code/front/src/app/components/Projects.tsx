"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import eventos from "../assets/eventos.jpeg";
import { Code } from "lucide-react";

// Definição dos tipos
type Project = {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
};

type ModalDetails = {
  id: number;
  title: string;
  image: string | StaticImageData;
  description: string;
  technologies: string[];
  link: string;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ModalDetails | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dados dos projetos (informações básicas)
  const projects: Project[] = [
    {
      id: 1,
      image: eventos,
      title: "Eventos",
      description:
        "Esse foi um projeto criado para me auxiliar no ensino de QAs sobre Cypress.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Coleta de Dados com Cypress",
      description:
        "Projeto para coletar dados pelo Cypress, salvar num banco e mostrar em uma dashboard React.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Gym Hub",
      description: "Software criado para fazer o controle de rotinas.",
    },
  ];

  // Dados detalhados para o modal (informações adicionais)
  const modalDetails: ModalDetails[] = [
    {
      id: 1,
      title: "Eventos",
      image: eventos,
      description:
        "Esse foi um projeto criado para me auxiliar no ensino de QAs sobre Cypress.",
      technologies: ["Cypress", "JavaScript", "Node.js"],
      link: "https://github.com/seu-usuario/projeto-eventos",
    },
    {
      id: 2,
      title: "Coleta de Dados com Cypress",
      image: "https://via.placeholder.com/150",
      description:
        "Projeto para coletar dados pelo Cypress, salvar num banco e mostrar em uma dashboard React.",
      technologies: ["Cypress", "React", "MongoDB"],
      link: "https://github.com/seu-usuario/projeto-coleta-dados",
    },
    {
      id: 3,
      title: "Gym Hub",
      image: "https://via.placeholder.com/150",
      description: "Software criado para fazer o controle de rotinas.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/seu-usuario/projeto-gym-hub",
    },
  ];

  // Função para abrir o modal com o projeto selecionado
  const openModal = (projectId: number) => {
    const projectDetails = modalDetails.find(
      (project) => project.id === projectId
    );
    if (projectDetails) {
      setSelectedProject(projectDetails);
      setIsModalOpen(true);
    }
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 mx-4 md:mx-8 rounded-xl border-white bg-zinc-800 shadow-sm shadow-green-300 cursor-pointer">
      <h1 className="mx-auto flex text-2xl md:text-3xl p-2 font-bold uppercase">
        Meus Projetos <Code className="mt-1 mx-2 text-green-300" />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-700 p-4 rounded-lg text-white shadow-md hover:bg-zinc-600 transition-colors"
            onClick={() => openModal(project.id)}
          >
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-zinc-800 p-6 rounded-lg text-white w-11/12 max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-300 hover:text-white"
            >
              <FaTimes className="text-2xl" />
            </button>

            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <div className="relative w-full h-48 rounded-lg mb-4">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Tecnologias:</h3>
              <ul className="list-disc list-inside">
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index} className="text-gray-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Ver no GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
