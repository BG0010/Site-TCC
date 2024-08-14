import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.svg'
import funcionamento from './assets/funcionamento.svg'

export default function Funcionamento() {
  return (
    <div className='bg-DarkBlue min-h-screen flex flex-col'>
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

      <main className="flex flex-col md:flex-row items-center justify-center md:justify-between p-4 md:p-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-WhiteHeader">Como funciona?</h2>
          <p className="mb-4 text-WhiteHeader text-lg md:text-xl">
            O produto tem um design parecido com uma cinta peitoral, com um botão centralizado no meio. 
            Após clicar no botão, ele enviará um SMS para o responsável do idoso. A cinta, além de ser 
            confortável, possui ajuste no tamanho.
          </p>
          <p className='text-WhiteHeader text-lg md:text-xl'>
            Com o botão de socorro, queremos evitar o sofrimento contínuo gerado pelo cuidador e, com isso, 
            nosso dispositivo irá comunicar as autoridades ou o responsável sobre a agressão sofrida. Dito 
            isso, queremos o bem-estar e a integridade física dos nossos idosos.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src={funcionamento} alt="Device" className="w-full max-w-xs md:max-w-md shadow-lg" />
        </div>
      </main>
    </div>
  )
}
