import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { RouterProvider } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles.ts'
import Rotas from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={Rotas} />
    </Provider>
  </React.StrictMode>
)
