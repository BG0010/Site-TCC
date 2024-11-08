import React, { useState } from 'react';
import logo from './assets/logo.svg';
import mainImage from './assets/homePage.svg'; 
import { Link } from 'react-router-dom';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-DarkBlue min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-WhiteHeader shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 max-w-7xl">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Navegação*/}
          <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-buttonHome uppercase text-xs md:text-sm font-medium tracking-wide">
              <li className="hover:text-DarkBlue">
                <Link to="Material">Material</Link>
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
              <li className="hover:text-DarkBlue">
                <Link to='/videos'>Vídeos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="bg-blue-900 text-white flex-1 py-12 md:py-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-8 max-w-7xl">
          {/* Text Section */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-WhiteHeader uppercase mt-4">
              Botão de Emergência para Idosos
            </h1>
            <p className="text-sm md:text-lg leading-relaxed text-WhiteHeader">
              Com o botão de socorro, queremos evitar o sofrimento contínuo gerado pelo cuidador. Com isso, nosso dispositivo irá comunicar as autoridades ou o responsável sobre a agressão sofrida. Dito isso, queremos o bem-estar e a integridade física dos nossos idosos.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img src={mainImage} alt="Botão de Emergência" className="w-full max-w-xs md:max-w-md" />
          </div>
        </div>
      </main>
    </div>
  );
}
