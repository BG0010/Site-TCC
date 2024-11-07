import React, { useState } from 'react';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Videos() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Exemplo de dados dos vídeos
  const videoList = [
    { id: 1, title: "Jogo", url: "https://www.youtube.com/watch?v=er57Ns_HW8c" },
    { id: 2, title: "BEI", url: "https://www.youtube.com/watch?v=gaQqsSezXJ4" },
  ];

  return (
    <div className="bg-DarkBlue min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-WhiteHeader shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 max-w-7xl">
          {/* Logo */}
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
            </Link>

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
          <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
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
                <Link to="/artigo">Artigo</Link>
              </li>
              <li className="hover:text-DarkBlue">
                <Link to='/videos'>Vídeos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content - Lista de Vídeos */}
      <main className="bg-blue-900 text-white flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center flex  md:text-left text-WhiteHeader">Vídeos</h2>
          <ul className="space-y-6">
            {videoList.map((video) => (
              <li key={video.id} className="border rounded-lg p-4 md:p-6 shadow hover:shadow-lg transition bg-WhiteHeader text-DarkBlue">
                <h3 className="text-lg md:text-2xl font-semibold mb-2">{video.title}</h3>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm md:text-base"
                >
                  Assista ao vídeo
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
