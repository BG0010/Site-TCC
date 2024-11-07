import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.svg';

const integrantes = [
  {
    nome: "Mateus Soares",
    idade: 17,
    frase: "Nunca é o fim, sempre é o início de um novo capítulo.",
    linkedin: "mateus-soares-045b712bb",
    instagram: "soares_yzz",
    imagem: "/images/mateus.png",
  },
  {
    nome: "Vinicius Borges",
    idade: 18,
    frase: "Trabalhe em silêncio e deixe seu sucesso fazer o barulho.",
    linkedin: "vinicius-borges-9644302b7",
    instagram: "borginhooo0",
    imagem: "/images/vinicius.png",
  },
  {
    nome: "Gabriel Pacheco",
    idade: 17,
    frase: "O maior risco é não correr risco algum.",
    linkedin: "gabriel-silva-pacheco-lopes-95468828a",
    instagram: "pachec_oo06",
    imagem: "/images/gabriel.png",
  },
];

const Integrantes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-DarkBlue min-h-screen text-WhiteHeader flex flex-col">
      {/* Header */}
      <header className="bg-WhiteHeader shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 max-w-7xl">
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
                <Link to='/artigo'>Artigo</Link>
              </li>
              <li className="hover:text-DarkBlue">
                <Link to='/videos'>Vídeos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Integrantes Section */}
      <div className="bg-blue-900 text-white flex-1 flex items-center justify-center py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {integrantes.map((integrante, index) => (
              <div
                key={index}
                className="bg-blue-800 p-6 rounded-lg text-center w-full max-w-sm"
              >
                <img
                  src={integrante.imagem}
                  alt={integrante.nome}
                  className="rounded-full mx-auto mb-4 w-24 h-24 md:w-36 md:h-36 object-cover"
                />
                <h2 className="text-xl md:text-2xl font-bold mb-2">{integrante.nome}</h2>
                <p className="mb-2">Idade: {integrante.idade}</p>
                <p className="italic mb-4">"{integrante.frase}"</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`https://www.linkedin.com/in/${integrante.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
                  </a>
                  <a
                    href={`https://www.instagram.com/${integrante.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/instagram.png" alt="Instagram" className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrantes;
