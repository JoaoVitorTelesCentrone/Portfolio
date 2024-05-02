import React from 'react'

const Techs = () => {
  return (
        <div className="flex sm:flex-col justify-between">
            <div className=' w-[50%] sm:w-full rounded-xl bg-secondary p-4 mr-4 '>
                <h1 className='text-3xl font-bold uppercase text-center'>Desenvolvimento</h1>
                <h1 className='text-xl my-1 text-center'>HTML, CSS, Javascript</h1>
                <h1 className='text-xl my-2 text-center'>React</h1>
                <h1 className='text-xl my-2 text-center'>Next js </h1>
                <h1 className='text-xl my-2 text-center'>Typescript</h1>
                <h1 className='text-xl my-2 text-center'>Node js</h1>
                <h1 className='text-xl my-2 text-center'>Tailwind css</h1>

            </div>
            <div className=' w-[50%] sm:w-full sm:ml-0 sm:my-2 rounded-xl bg-secondary p-4 ml-4  shadow-sm shadow-slate-600'>
                <h1 className='text-3xl font-bold uppercase text-center'>Testes</h1>
                <h1 className='text-xl my-2 text-center'>Testes E2E :  Cypress Selenium</h1>
                <h1 className='text-xl my-2 text-center'>Testes unitários : jest</h1>
                <h1 className='text-xl my-2 text-center'>Testes de API : Postman / Bruno</h1>
                <h1 className='text-xl my-2 text-center'>Escrita de cenários de tetes : Gherkin</h1>
            </div>
        </div>
  )
}

export default Techs