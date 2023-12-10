import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex flex-col sm:space-y-5 sm:py-20 h-30 md:space-y-0 md:flex-row justify-center items-center py-10 bg-gradient-to-r from-purple to-pink text-white font-body'>
        <div>
            <Image
                src="/portfolio-photo.png"
                alt="Portfolio Image"
                width={300}
                height={300}
            />
        </div>
        <div className='flex flex-col space-y-4 justify-around text-center w-1/2'>
            <div>
                <h1 className='sm:mt-10 md:mt-0 text-5xl font-heading'>Leanne Goldsmith</h1>
                <h2 className='text-xl mt-2'>Junior Frontend Developer</h2>
            </div>
            <p>Passionate Junior Frontend Developer crafting seamless digital experiences</p>
            <Link href="https://docs.google.com/document/d/1Nt3uCrIML4-v-uIG6yciaNUGDrvdKN2kt5WZR9tNfLA/edit#heading=h.x8fm1uorkbaw" target='_blank' className='font-semibold hover:text-green'>Preview CV</Link>
        </div>
    </div>
  )
}

export default Hero