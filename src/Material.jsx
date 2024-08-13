import React from 'react'
import logo from './assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Material() {
  return (
    <div>
        <header>
        <header className="bg-WhiteHeader shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/"><img src={logo} alt="Logo" className="h-16 w-auto" /></Link>
          </div>

          {/* Navegação*/}
          <nav>
            <ul className="flex space-x-10 text-buttonHome uppercase text-sm font-medium tracking-wide">
              <li className="hover:text-blue-700">
                <Link to="Material">Material</Link>
              </li>
              <li className="hover:text-blue-700">
                <a href="#">Funcionamento</a>
              </li>
              <li className="hover:text-blue-700">
                <a href="#">Integrantes</a>
              </li>
              <li className="hover:text-blue-700">
                <a href="#">Artigos</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
        </header>
    </div>
  )
}


