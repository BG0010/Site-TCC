import logo from './assets/logo.svg'
import mainImage from './assets/homePage.svg' 

export default function App() {
  return (
    <body>
      
    
    <div className="bg-DarkBlue">
      {/* Header */}
      <header className="bg-WhiteHeader shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Navegação*/}
          <nav>
            <ul className="flex space-x-10 text-buttonHome uppercase text-sm font-medium tracking-wide">
              <li className="hover:text-blue-700">
                <a href="#">Material</a>
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

      {/* Main Section */}
      <main className="bg-blue-900 text-white py-20 h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-8">
          {/* Text Section */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-32 text-WhiteHeader uppercase
            ">
              Botão de Emergência para Idosos
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-WhiteHeader">
              Com o botão de socorro, queremos evitar o sofrimento contínuo gerado pelo cuidador. Com isso, nosso dispositivo irá comunicar as autoridades ou o responsável sobre a agressão sofrida. Dito isso, queremos o bem-estar e a integridade física dos nossos idosos.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img src={mainImage} alt="Botão de Emergência" className="w-413 h-413 px-32" />
          </div>
        </div>
      </main>
    </div>
  </body>
  )
}
