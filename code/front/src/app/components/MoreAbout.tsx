import { Globe } from 'lucide-react'
import React from 'react'

const MoreAbout = () => {
  return (
    <div className='mb-4 flex w-full sm:flex-col'>
        <div className='rounded-xl flex flex-col w-[30%] sm:w-full sm:my-1 bg-secondary'>
            <Globe className='mx-4 h-12 w-12 my-4' />
            <h1 className='text-white max-w-[300px] p-4 font-bold text-5xl'>Morando em São Paulo, capital</h1>
        </div>
        <div className='rounded-xl ml-4 w-[70%] bg-secondary p-4 sm:w-full sm:ml-0'>
            <h1 className='text-white font-bold max-w-[800px] text-4xl my-4 ml-2 mr-10 sm:text-base'>Como profissional, me especializei não apenas em entregar uma qualidade de software, pois acredito que uma boa qualidade de software, so se alcança com uma boa qualidade de projeto.</h1>
        </div>
    </div>
  )
}

export default MoreAbout