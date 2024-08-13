import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Configurando router
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import Material from './Material.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: 'material',
    element: <Material/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
