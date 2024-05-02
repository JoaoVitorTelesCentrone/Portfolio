import Image from "next/image";
import Navbar from "./components/Navbar";
import MySection from "./components/MySection";
import SocialMedia from "./components/SocialMedia";
import MoreAbout from "./components/MoreAbout";
import Projects from "./components/BloodProject";
import HaveAProject from "./components/HaveAProject";
import Footer from "./components/Footer";
import BloodProject from "./components/BloodProject";
import { Code } from "lucide-react";
import Techs from "./components/Techs";

export default function Home() {
  return (
    <main className="flex flex-col sm:mx-6 mx-32 my-16  ">
      <Navbar />
      <MySection />
      <SocialMedia />
      <MoreAbout />
      <h1 className="mr-4 text-3xl font-bold uppercase my-4">Conhecimentos</h1>
      <Techs />
      <div className="flex my-4" id="projects">
        <h1 className="mr-4 text-3xl font-bold uppercase">Projetos</h1>
        <Code className="mt-2" />
      </div>
      <BloodProject />
      <HaveAProject />
      <Footer />
    </main>
  );
}
