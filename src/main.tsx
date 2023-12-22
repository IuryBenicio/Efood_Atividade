import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
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
    path: '/Perfil/:id',
    element:  <Perfil />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={Rotas} />
    </Provider>
  </React.StrictMode>,
)
