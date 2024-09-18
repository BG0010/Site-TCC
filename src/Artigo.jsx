import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';

export default function Artigo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-DarkBlue min-h-screen flex flex-col text-WhiteHeader'>
      {/* Header */}
      <header className="bg-WhiteHeader shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-DarkBlue focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Navegação */}
          <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-buttonHome uppercase text-xs md:text-sm font-medium tracking-wide">
              <li className="hover:text-DarkBlue">
                <Link to="/material">Material</Link>
              </li>
              <li className="hover:text-DarkBlue">
                <Link to='/funcionamento'>Funcionamento</Link>
              </li>
              <li className="hover:text-DarkBlue">
                <Link to='/integrantes'>Integrantes</Link>
              </li>
              <li className="hover:text-DarkBlue">
                <Link to='/artigo'>Artigo</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="bg-blue-400 text-white text-center py-2 px-4 rounded-lg mb-4">
          <a
            href="https://www.scielo.br/j/reben/a/PXhg5WN8VCF53b5mDdsN3GH/"
            className="underline text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link para o artigo
          </a>
        </div>
        <div className="bg-blue-600 text-white h-16 w-full max-w-md rounded-lg mb-4"></div>
        <div className="bg-blue-600 text-white h-16 w-full max-w-md rounded-lg mb-4"></div>
        <div className="bg-blue-600 text-white h-16 w-full max-w-md rounded-lg"></div>
      </main>
    </div>
  );
}
