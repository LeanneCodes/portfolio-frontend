'use client'
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = ({ onClose }) => (
  <>
    <a href='#about' onClick={onClose} className='hover:text-green'>About Me</a>
    <a href='#skills' onClick={onClose} className='hover:text-green'>Skills</a>
    <a href='#projects' onClick={onClose} className='hover:text-green'>Projects</a>
    <a
      href="https://docs.google.com/document/d/1Nt3uCrIML4-v-uIG6yciaNUGDrvdKN2kt5WZR9tNfLA/edit#heading=h.x8fm1uorkbaw"
      target='_blank'
      rel="noopener noreferrer"
      onClick={onClose}
      className='hover:text-green'
    >
      CV
    </a>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='flex flex-col md:flex-row justify-between py-10 px-72 font-body'>
      <div>
        <a href="#home" className='font-heading text-3xl'>Leanne Goldsmith</a>
      </div>
      <div className='flex flex-col space-y-2 md:flex-row md:space-x-5 md:space-y-0 text-lg'>
        <div className='hidden md:flex'>
          <Menu onClose={closeMenu} />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen
              ? <RiCloseLine size={27} onClick={closeMenu} />
              : <RiMenu3Line size={27} />
            }
          </button>
          {isOpen && (
            <div className='flex flex-col items-center'>
              <Menu onClose={closeMenu} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;