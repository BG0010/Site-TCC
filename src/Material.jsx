import React from 'react';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';
import material from './assets/material.svg';

export default function Material() {
  return (
    <div className="min-h-screen flex flex-col bg-DarkBlue">
      <header className="bg-WhiteHeader shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
            </Link>
          </div>

          {/* Navegação */}
          <nav>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 uppercase text-xs md:text-sm text-buttonHome font-medium tracking-wide">
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

      <main className="flex-1 flex flex-col items-center justify-center bg-blue-900 py-12 md:py-16 px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="text-WhiteHeader lg:w-1/2 px-4 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              Usamos os seguintes materiais para produzir nosso produto.
            </h1>
            <ul className="space-y-2 list-disc list-inside text-LightBlue">
              <li>Uno R3 SMD CH340;</li>
              <li>Módulo GPS NEO-6M com antena;</li>
              <li>Chave Botão PBS-29;</li>
              <li>Adaptador Bateria 9v com Plug;</li>
              <li>Módulo Bluetooth HC-05;</li>
              <li>Mini Protoboard 170 pontos.</li>
            </ul>
          </div>
          <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
            <img src={material} alt="Imagem Mãos" className="w-full max-w-xs md:max-w-md object-cover" />
          </div>
        </div>
      </main>
    </div>
  );
}
