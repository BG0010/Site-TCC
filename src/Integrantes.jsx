import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.svg';

const integrantes = [
  {
    nome: "Mateus Soares",
    idade: 17,
    frase: "Nunca é o fim, sempre é o início de um novo capítulo",
    linkedin: "mateus-soares-045b712bb",
    instagram: "soares_yzz",
    imagem: "/images/mateus.png",
  },
  {
    nome: "Vinicius Borges",
    idade: 17,
    frase: "Trabalhe em silêncio e deixe seu sucesso fazer o barulho.",
    linkedin: "vinicius-borges-9644302b7",
    instagram: "borginhooo0",
    imagem: "/images/vinicius.png",
  },
  {
    nome: "Gabriel Pacheco",
    idade: 17,
    frase: "O maior risco é não correr risco algum",
    linkedin: "gabriel-silva-pacheco-lopes-95468828a",
    instagram: "pachec_oo06",
    imagem: "/images/gabriel.png",
  },
];

const Integrantes = () => {
  return (
    <div className="bg-DarkBlue h-screen text-WhiteHeader">
      <header className="bg-WhiteHeader shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Navegação */}
          <nav>
            <ul className="flex space-x-10 uppercase text-sm text-buttonHome font-medium tracking-wide">
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
                <a href="#">Artigos</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {integrantes.map((integrante, index) => (
              <div
                key={index}
                className="bg-blue-800 p-6 rounded-lg text-center"
              >
                <img
                  src={integrante.imagem}
                  alt={integrante.nome}
                  className="rounded-full mx-auto mb-4"
                  style={{ width: "150px", height: "150px" }}
                />
                <h2 className="text-2xl font-bold mb-2">{integrante.nome}</h2>
                <p className="mb-2">Idade : {integrante.idade}</p>
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
