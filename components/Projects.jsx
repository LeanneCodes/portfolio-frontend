import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";

const Projects = () => {
  return (
    <div id='projects' className='font-body pb-20 px-72 text-center'>
        <h3 className='font-heading text-center text-2xl mb-5'>Projects</h3>
        <hr className='w-1/12 border-mint border-2 mx-auto mb-10' />
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row mt-16 w-full justify-between'>
            <div className='w-1/2 flex justify-center'>
              <Image
                src="/vaultkey.png"
                alt="VaultKey Password Generator Project"
                width={400}
                height={400}
              />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-start'>
              <h4 className='text-3xl font-heading mb-1'>VaultKey Password Generator</h4>
              <h6 className='text-xl font-heading mb-3'>HTML5, CSS3, JavaScript</h6>
              <p className='mb-5 text-left'>A password generator that intakes user input and forms a password between 8 and 128 characters.</p>
              <div className='flex flex-row space-x-5'>
                <Link href="https://github.com/LeanneCodes/vault-key-generator" target='_blank'><FaGithub className='text-4xl hover:text-green'/></Link>
                <Link href="https://leannecodes.github.io/vault-key-generator/" target='_blank'><TfiNewWindow className='text-4xl hover:text-green'/></Link>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row mt-16 w-full justify-between'>
            <div className='w-1/2 flex justify-center'>
              <Image
                src="/project2.png"
                alt="VaultKey Password Generator Project"
                width={400}
                height={400}
              />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-start'>
              <h4 className='text-3xl font-heading mb-1'>Title</h4>
              <h6 className='text-xl font-heading mb-3'>Techstack</h6>
              <p className='mb-5 text-left'>Summary</p>
              <div className='flex flex-row space-x-5'>
                <Link href="https://github.com/LeanneCodes" target='_blank'><FaGithub className='text-4xl hover:text-green'/></Link>
                <Link href="https://www.linkedin.com/in/leanne-m-goldsmith/" target='_blank'><TfiNewWindow className='text-4xl hover:text-green'/></Link>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row mt-16 w-full justify-between'>
            <div className='w-1/2 flex justify-center'>
              <Image
                src="/project3.png"
                alt="VaultKey Password Generator Project"
                width={400}
                height={400}
              />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-start'>
              <h4 className='text-3xl font-heading mb-1'>Title</h4>
              <h6 className='text-xl font-heading mb-3'>Techstack</h6>
              <p className='mb-5 text-left'>Summary</p>
              <div className='flex flex-row space-x-5'>
                <Link href="https://github.com/LeanneCodes" target='_blank'><FaGithub className='text-4xl hover:text-green'/></Link>
                <Link href="https://www.linkedin.com/in/leanne-m-goldsmith/" target='_blank'><TfiNewWindow className='text-4xl hover:text-green'/></Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects