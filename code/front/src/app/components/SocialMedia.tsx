import Link from 'next/link'
import React from 'react'

const SocialMedia = () => {
  return (
    <div className='my-4 flex justify-around sm:justify-center sm:mx-4'>
        <Link className='py-2 px-10 sm:mx-2 sm:px-4 bg-secondary rounded-xl mx-4 text-white font-bold text-center hover:transition delay-100 hover:scale-105' href='' >linkedin.</Link>
        <Link className='py-2 px-10 sm:mx-2 sm:px-4 bg-secondary rounded-xl mx-4 text-white font-bold text-center hover:transition delay-100 hover:scale-105' href='' >twitter.</Link>
        <Link className='py-2 px-10 sm:mx-2 sm:px-4 bg-secondary rounded-xl mx-4 text-white font-bold text-center hover:transition delay-100 hover:scale-105' href='' >instagram.</Link>        
    </div>
  )
}

export default SocialMedia