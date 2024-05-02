import { Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import foto from '../assets/foto.png'

const MySection = () => {
  return (
    <div className='flex w-full sm:flex-col' id='my-page'>
      <div className='w-[60%] sm:w-[100%] rounded-xl bg-secondary p-4 flex justify-between sm:flex-col '>
        <Image alt='' className='w-[200px] h-[200px] rounded-3xl my-2 ' src={foto} />
        <h1 className='max-w-[600px] text-5xl font-bold sm:text-xl my-2'>João Centrone é um desenvolverdor de software atualmente trabalhando em ZBRA</h1>
      </div>
      <div className='w-[40%] sm:w-full sm:ml-0 sm:mt-4 flex flex-col ml-3 rounded-xl bg-secondary '>
        <div className='mt-12 sm:mt-4'>
          <h1 className='mx-auto text-center max-w-[400px] text-5xl font-extrabold'>Tem algum projeto em mente ?</h1>
          <Link href='' className='flex text-center  mx-auto sm:mb-4 my-8 rounded-xl bg-primary text-black p-2 justify-between max-w-[230px] text-xl font-bold hover:bg-green-200 hover:transition delay-100 hover:scale-125 '>Entre em contato<Send className='w-5 h-5 mt-1 mx-2' /></Link>
        </div>
      </div>
    </div>
  )
}

export default MySection