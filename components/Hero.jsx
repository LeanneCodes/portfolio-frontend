import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around items-center py-20 px-96 bg-purple font-body'>
        <div>
            <Image
                src="/portfolio-photo.png"
                alt="Portfolio Image"
                width={300}
                height={300}
            />
        </div>
        <div className='flex flex-col justify-around text-center h-48'>
            <div>
                <h1 className='text-5xl font-heading'>Leanne Goldsmith</h1>
                <h3 className='text-xl mt-2'>Junior Frontend Developer</h3>
            </div>
            <p>Passionate Junior Frontend Developer crafting seamless digital experiences</p>
            <Link href="https://docs.google.com/document/d/1Nt3uCrIML4-v-uIG6yciaNUGDrvdKN2kt5WZR9tNfLA/edit#heading=h.x8fm1uorkbaw" target='_blank' className='font-semibold hover:text-pink'>Preview CV</Link>
        </div>
    </div>
  )
}

export default Hero