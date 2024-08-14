import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'


// Configurando router
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import Material from './Material.jsx'
import App from './App.jsx'
import Funcionamento from './Funcionamento.jsx'
import Integrantes from './Integrantes.jsx'
import Artigo from './Artigo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: 'material',
    element: <Material/>
  },
  {
    path: 'funcionamento',
    element: <Funcionamento/>
  },
  {
    path: 'integrantes',
    element: <Integrantes/>
  },
  {
    path: 'artigo',
    element: <Artigo/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
