import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row justify-between p-10 font-body'>
        <div>
            <a href="#home" className='font-heading text-3xl'>Leanne Goldsmith</a>
        </div>
        <div className='flex flex-col space-y-2 md:flex-row md:space-x-5 md:space-y-0 text-lg'>
            <a href="#about" className='hover:text-pink'>About Me</a>
            <a href="#skills" className='hover:text-pink'>Skills</a>
            <a href="#projects" className='hover:text-pink'>Projects</a>
            <Link href="https://docs.google.com/document/d/1Nt3uCrIML4-v-uIG6yciaNUGDrvdKN2kt5WZR9tNfLA/edit#heading=h.x8fm1uorkbaw" target='_blank' className='hover:text-pink'>CV</Link>
        </div>
    </nav>
  )
}

export default Navbar