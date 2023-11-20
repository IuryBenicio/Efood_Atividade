import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/index.tsx'
import { GlobalStyles } from './styles.ts'
import Perfil from './Pages/Perfil/index.tsx'

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Perfil',
    element:  <Perfil />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={Rotas} />
  </React.StrictMode>,
)
