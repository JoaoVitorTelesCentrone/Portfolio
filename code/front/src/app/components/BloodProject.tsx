import { Code, MoveUpRight, Syringe } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import project1 from '../assets/foto-project.png'
import Link from 'next/link'

const BloodProject = () => {
  return (
    <div className='p-8 bg-green-900 rounded-2xl sm:p-4' id='projetos'>
        <div className="flex sm:flex-col justify-around w-full">
            <div className="flex flex-col sm:flex-none sm:w-full w-[50%]">
              <h1 className='text-white flex font-bold text-3xl mt-2'><Syringe className='font-bold mx-4 mt-1' />Blood Donation</h1>
              <h1 className='m-2 text-md text-slate-400 text-center'>Projeto com o intuito de aumentar o número de doações de sangue</h1>
            </div>
            <div className='my-4 w-[40%] sm:w-full sm:my-1'> 
              <h1 className='text-xl font-bold text-center'>Desenvolvido para o TCC da faculdade utilziando React, Node e  Tailwind</h1>
            </div>
            <div className='w-[10%] sm:my-0'>
            <Link href='https://tcc-blood-dev.vercel.app/'><MoveUpRight className='w-10 h-10 mt-4 ml-12 hover:transition delay-400 hover:scale-125 sm:w-0 sm:h-0' /></Link>
            </div>
        </div>
        <Link href='https://tcc-blood-dev.vercel.app/'><Image className='rounded-3xl mt-2 hover:transition delay-400 hover:scale-90 sm:mt-0 ' alt='' src={project1} /></Link>
       
    </div>
  )
}

export default BloodProject