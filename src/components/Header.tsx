'use client'

import { useState } from 'react';
import { NavLinkMobile, NavLinkPc } from './NavLinks';
import Link from 'next/link';


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between py-4 px-8 font-semibold flex-col space-y-6 text-black">

      <div className="flex items-center">
        <Link href={'/'}>
          <img
            src="logo.png" // Caminho da imagem do logotipo
            alt="Logo"
            width="60px" // Largura desejada da imagem
          />
        </Link>
      </div>

    {/* Menu de Navegação para PC */}
      <nav className="hidden md:flex items-center">
            <NavLinkPc />
      </nav>

    {/* Menu de Navegação para Mobile */}
      <nav
        className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
        >
        <div className="relative bg-black rounded text-white">
            <NavLinkMobile acao={toggleMenu} />
        </div>
        </nav>



      <button className="md:hidden" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
  );
};
