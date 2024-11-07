import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import logo from './assets/logo.svg';
import component1 from './assets/arduino.jpeg'; 
import component2 from './assets/gps.jpeg'; 
import component3 from './assets/botao.jpeg'; 
import component4 from './assets/bluetooth.jpeg';
import component5 from './assets/acelerometro.png'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Material() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

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
              <li className="hover:text-DarkBlue">
                <Link to='/videos'>Vídeos</Link>
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
              <li>Módulo Bluetooth HC-05;</li>
              <li>Acelerômetro.</li>
            </ul>
          </div>

          {/* Slider de Imagens */}
          <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
            <Slider {...settings} className="w-full max-w-xs md:max-w-md">
              <div>
                <img src={component1} alt="Componente 1" className="w-full h-128 object-cover" />
              </div>
              <div>
                <img src={component2} alt="Componente 2" className="w-full h-128 object-cover" />
              </div>
              <div>
                <img src={component3} alt="Componente 3" className="w-full h-128 object-cover" />
              </div>
              <div>
                <img src={component4} alt="Componente 4" className="w-full h-128 object-cover" />
              </div>
              <div>
                <img src={component5} alt="Componente 4" className="w-full h-128 object-cover" />
              </div>
            </Slider>
          </div>
        </div>
      </main>
    </div>
  );
}
