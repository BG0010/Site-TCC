import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.svg';

const Card = ({ title, description, href, bgColor, textColor }) => (
  <div className={`bg-${bgColor} text-${textColor} p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-4 max-w-md w-full`}>
    <a
      href={href}
      className="block hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </a>
  </div>
);

export default function Artigo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="bg-DarkBlue min-h-screen text-WhiteHeader flex flex-col">
      {/* Header */}
      <header className="bg-WhiteHeader shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 max-w-7xl">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto transition-transform transform hover:scale-105" />
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Navegação */}
          <nav className={`flex flex-col md:flex-row md:space-x-16 ${isOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-buttonHome uppercase text-xs md:text-sm font-medium tracking-wide">
              <li className="hover:text-DarkBlue">
                <Link to="/material">Material</Link>
              </li>
              <li className="hover:text-DarkBlue">
                <Link to="/funcionamento">Funcionamento</Link>
              </li>
              <li className="hover:text-DarkBlue">
                <Link to="/integrantes">Integrantes</Link>
              </li>
              <li className="hover:text-DarkBlue">
                <Link to='/artigo'>Artigo</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <Card 
          title="Scielo Brasil" 
          description="Acesse o artigo completo na SciELO Brasil" 
          href="https://www.scielo.br/j/reben/a/PXhg5WN8VCF53b5mDdsN3GH/" 
          bgColor="bg-CardArtigo"  // Cor mais clara
          textColor="white" 
        />

        <Card 
          title="G1" 
          description="Leia a notícia completa no G1" 
          href="https://g1.globo.com/ba/bahia/noticia/2023/07/27/familia-denuncia-asilo-de-cometer-abusos-contra-idosa-em-salvador-vitima-foi-encontrada-com-hematomas.ghtml" 
          bgColor="bg-CardArtigo"  // Cor mais clara
          textColor="white" 
        />
      </main>
    </div>
  );
}
