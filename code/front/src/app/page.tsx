import Image from "next/image";
import Navbar from "./components/Navbar";
import MySection from "./components/MySection";
import SocialMedia from "./components/SocialMedia";
import MoreAbout from "./components/MoreAbout";
import Projects from "./components/Projects";
import HaveAProject from "./components/HaveAProject";
import Footer from "./components/Footer";
import BloodProject from "./components/BloodProject";
import {
  Code,
  GraduationCap,
  Lamp,
  LampDesk,
  LampDeskIcon,
  LampFloor,
  LampIcon,
} from "lucide-react";
import Techs from "./components/Techs";
import Formation from "./components/Formation";

export default function Home() {
  return (
    <main className="flex flex-col bg-zinc-900 h-full w-full">
      <Navbar />
      <MySection />
      <SocialMedia />
      <MoreAbout />

      <Projects />
      <Footer />
    </main>
  );
}
