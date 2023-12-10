import React from 'react'
import Year from './Year'
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-gray border-t-2'>
      <div className='flex flex-col md:flex-row justify-between p-10 font-heading text-2xl'>
        <div>© <Year /> Leanne Goldsmith</div>
        <div className='flex flex-row space-x-5'>
          <Link href="#"><FaGithub /></Link>
          <Link href="#"><FaLinkedin /></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer