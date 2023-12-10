import React from 'react'
import Year from './Year'
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <hr className='w-11/12 border-gray border-1 mx-auto'/>
      <div className='flex flex-col md:flex-row justify-between py-10 px-20 font-heading text-2xl'>
        <div>© <Year /> Leanne Goldsmith</div>
        <div className='flex flex-row space-x-5'>
          <Link href="https://github.com/LeanneCodes" target='_blank'><FaGithub className='hover:text-green'/></Link>
          <Link href="https://www.linkedin.com/in/leanne-m-goldsmith/" target='_blank'><FaLinkedin className='hover:text-green'/></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer