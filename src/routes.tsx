import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Perfil/:id',
    element: <Perfil />
  }
])

export default Rotas
