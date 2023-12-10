import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='font-body p-20'>
        <h3 className='font-heading text-center text-2xl mb-5'>About Me</h3>
        <hr className='w-1/12 border-mint border-2 mx-auto'/>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='sm:w-full sm:text-center sm:mt-10 sm:pr-0 md:w-3/5 md:pr-10'>
                <p>
                    During my career, I specialised in Addressable Advertising, building display ad banners for clients like Eurostar, Audible and Legoland. I discovered that I love transforming creative designs into live ads using HTML, CSS, JavaScript and Greensock. Making them stand out with functionality and visual appeal.<br/><br/>
                    Now, I'm eager to transition into a full-time Frontend Developer role, collaborating with dedicated professionals and continuously learning and growing in this exciting tech world. I'm ready to bring my skills to innovative projects and stay ahead in this ever-evolving industry.
                </p>
            </div>
            <div>
                <Image
                    src="/woman-animated.png"
                    alt="A black woman coding"
                    width={350}
                    height={350}
                    className='sm:mt-10'
                />
            </div>
        </div>
    </div>
  )
}

export default About