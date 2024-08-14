import React from 'react'
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Artigo() {
  return (
    <div className='bg-DarkBlue min-h-screen flex flex-col text-WhiteHeader'>
      <header className="bg-WhiteHeader shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/"><img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" /></Link>
          </div>

          {/* Navegação */}
          <nav>
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
  )
}
