import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import funcionamento from './assets/funcionamento.svg';

export default function Funcionamento() {
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
                <Link to="/funcionamento">Funcionamento</Link>
              </li>
              <li className="hover:text-DarkBlue">
                <Link to="/integrantes">Integrantes</Link>
              </li>
              <li className="hover:text-DarkBlue">
                <Link to="/artigo">Artigo</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-WhiteHeader">Como funciona?</h2>
            <p className="mb-4 text-WhiteHeader text-lg md:text-xl">
              O produto tem um design parecido com uma cinta peitoral, com um botão centralizado no meio. 
              Após clicar no botão, ele enviará um SMS para o responsável do idoso. A cinta, além de ser 
              confortável, possui ajuste no tamanho.
            </p>
            <p className="text-WhiteHeader text-lg md:text-xl">
              Com o botão de socorro, queremos evitar o sofrimento contínuo gerado pelo cuidador e, com isso, 
              nosso dispositivo irá comunicar as autoridades ou o responsável sobre a agressão sofrida. Dito 
              isso, queremos o bem-estar e a integridade física dos nossos idosos.
            </p>

            {/* Guia de Utilização */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-LightBlue">Guia de Utilização</h3>
              <ol className="list-decimal ml-5 space-y-3 text-LightBlue">
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                  <strong>Preparação do Produto:</strong> Retire o dispositivo da embalagem. O produto se assemelha a uma cinta peitoral. Ajuste conforme necessário para o conforto do idoso.
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                  <strong>Funcionamento do Dispositivo:</strong> Pressione o botão central em caso de emergência para enviar um SMS automático ao responsável.
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                  <strong>Envio de Alerta:</strong> O SMS será enviado automaticamente para o responsável ou autoridades, conforme configurado.
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                  <strong>Manutenção e Cuidados:</strong> Verifique regularmente se a cinta e o botão estão funcionando corretamente. Mantenha o dispositivo com carga.
                </li>
              </ol>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img src={funcionamento} alt="Device" className="w-full max-w-xs md:max-w-md shadow-lg" />
          </div>
        </div>
      </main>
    </div>
  );
}
