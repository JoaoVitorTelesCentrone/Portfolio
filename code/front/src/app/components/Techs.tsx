import { GraduationCap, LampFloor } from "lucide-react";
import React from "react";

const Techs = () => {
  return (
    <div className="flex xs:flex-col lg:flex-row sm:flex-col justify-between">
      <div className="lg:w-[45%] s lg:max-w-[4000px]">
        <h1 className="mx-auto flex text-3xl xs:text-2xl p-2 font-bold uppercase">
          Conhecimentos <LampFloor className="text-green-300 mt-1 ml-4" />
        </h1>
        <div className="xs:flex-row flex lgsm:w-full xs:max-w-[380px] md:w-[760px] md:max-w-[750px] rounded-xl bg-zinc-800 p-2 mb-2 mx-2 xs:justify-between  ">
          <div className="xs:w-[45%]">
            <h1 className="text-xl my-1 text-center">HTML, CSS, Javascript</h1>
            <h1 className="text-xl my-2 text-center">React</h1>
            <h1 className="text-xl my-2 text-center">Next js </h1>
            <h1 className="text-xl my-2 text-center">Typescript</h1>
          </div>
          <div className="xs:w-45%]">
            <h1 className="text-xl my-2 text-center">Node js</h1>
            <h1 className="text-xl my-2 text-center">Tailwind css</h1>
            <h1 className="text-xl my-2 text-center">Cypress</h1>
            <h1 className="text-xl my-2 text-center">Jest</h1>
          </div>
        </div>
      </div>

      <div className="xs:flex-col lg:w-[45%] lg:max-w-[500px] flex :sm:w-full xs:max-w-[380px] md:w-[760px] md:max-w-[750px] rounded-xl bg-zinc-800 p-2 mb-2 mx-2 xs:justify-between  ">
        <h1 className="mx-auto flex text-3xl xs:text-2xl p-2 font-bold uppercase">
          Formação <GraduationCap className="mx-2 mt-1 text-green-300" />
        </h1>
        <h1 className="mb-2">Ciência da computação Mackenzie 2020-2023</h1>
        <h1 className="mb-2">
          Pós graduação Engenharia de software puc minas atual
        </h1>
        <h1 className="mb-2">Estágiario QA ZBRA 2021-2023</h1>
        <h1 className="mb-2">Analista de qualidade ZBRA atual</h1>
      </div>
    </div>
  );
};

export default Techs;
